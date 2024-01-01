'use client';
import BubleChat from "@/app/components/BubleChat";
import {FaPaperPlane} from "react-icons/fa";
import React, {useEffect} from "react";
import {API_URL} from "@/app/lib/constant";

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
            <form
                className="basis-[10%] border-t border-t-gray-200 p-3 flex items-center space-x-4 px-5"
                onSubmit={submitHandler}
            >
                <input
                    placeholder={"Masukan pesan anda"}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="outline-none border border-primary p-1 rounded-md active:border-primary w-full"
                />
                <button type="submit">
                    <FaPaperPlane className="text-primary"/>
                </button>
            </form>
        </div>
    )
}
