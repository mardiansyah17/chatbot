<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/chat', function () {
    $question = request()->get('message');

    return response()->stream(function () use ($question) {
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
    }, 200, [
        'Cache-Control' => 'no-cache',
        'X-Accel-Buffering' => 'no',
        'Content-Type' => 'text/event-stream',
    ]);

});
