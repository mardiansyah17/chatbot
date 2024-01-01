'use client';
import BubleChat from "@/app/components/BubleChat";
import React, {useEffect} from "react";
import {API_URL} from "@/app/lib/constant";
import ChatInput from "@/app/components/ChatInput";

export default function Home() {
    const [message, setMessage] = React.useState<string>('apa itu node js');
    const [result, setResult] = React.useState<string>('');
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const source = new EventSource(`${API_URL}/chat?message=${message}`);

        source.addEventListener('update', (event) => {
            if (event.data === "<END_STREAMING_SSE>") {
                source.close();
                return;
            }
            setResult(prevState => prevState + event.data)
        })

    }

    useEffect(() => {
        console.log(result)
    }, [result]);

    return (
        <div className="flex flex-col basis-full">
            <p>{result}</p>
            <div className="p-3 basis-[90%]  overflow-y-auto ">
                <BubleChat/>

            </div>
            <ChatInput/>
        </div>
    )
}
