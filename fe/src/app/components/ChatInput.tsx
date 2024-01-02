'use client'

import {FaPaperPlane} from "react-icons/fa";
import React from "react";
import useChatStore from "@/app/lib/store/useChatStore";
import {API_URL} from "@/app/lib/constant";
import axios from "axios";

export default function ChatInput() {

    const [message, setMessage] = React.useState<string>('');
    const {setChats, setIsLoading} = useChatStore()
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setChats({message, isQuestion: true, isAnswer: false})
        setIsLoading(true)
        const source = await axios.post(`${API_URL}/chat`, {
            message

        }).then((res) => {
            setChats({message: res.data.message, isQuestion: false, isAnswer: true})

        });

        setIsLoading(false)

    }

    return <form
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
}