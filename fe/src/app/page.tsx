import {API_URL} from "@/app/lib/constant";
import React from "react";
import ChatInput from "@/app/components/ChatInput";
import Conversation from "@/app/Conversation";

async function getChat() {
    const res = await fetch(`${API_URL}/chats`, {cache: 'no-store'})

    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return res.json().then((data) => data.chats)
}

export default async function Home() {
    const chats = await getChat()
    console.log(chats)
    return (
        <div className="flex flex-col basis-full">
            <Conversation chatsData={chats}/>
            <ChatInput/>
        </div>
    )
}
