<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Exception;
use OpenAI\Laravel\Facades\OpenAI;

class ConversationController extends Controller
{
    public function chat()
    {
        try {
            $question = request()->get('message');
            return response()->stream(function () use ($question) {
                $answer = "";
                $stream = OpenAI::completions()->createStreamed([
                    'model' => 'text-davinci-003',
                    'prompt' => $question,
                    'max_tokens' => 1024,
                ]);

                foreach ($stream as $response) {
                    $text = $response->choices[0]->text;
                    if (connection_aborted()) {
                        break;
                    }
                    $answer .= $text;
                    echo "event: update\n";
                    echo 'data: ' . $text;
                    echo "\n\n";
                    ob_flush();
                    flush();
                }

                echo "event: update\n";
                echo 'data: <END_STREAMING_SSE>';
                echo "\n\n";
                ob_flush();
                flush();
                Conversation::create([
                    'question' => $question,
                    'answer' => $answer
                ]);
            }, 200, [
                'Cache-Control' => 'no-cache',
                'X-Accel-Buffering' => 'no',
                'Content-Type' => 'text/event-stream',
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
