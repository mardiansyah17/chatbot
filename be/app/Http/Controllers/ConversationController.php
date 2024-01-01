<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Exception;
use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class ConversationController extends Controller
{
    public function getChat()
    {
        try {
            $chats = Conversation::all();
            return response()->json([
                'chats' => $chats
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function chat(Request $request)
    {
        try {

            $question = request()->get('message');
            $stream = OpenAI::completions()->create([
                'model' => 'text-davinci-003',
                'prompt' => $question,
                'max_tokens' => 500,
            ]);


            Conversation::create([
                'message' => $question,
                'isQuestion' => true
            ]);

            Conversation::create([
                'message' => $stream['choices'][0]['text'],
                'isAnswer' => false
            ]);
            return response()->json([
                'message' => $stream['choices'][0]['text']

            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
