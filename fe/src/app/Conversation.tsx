'use client'
import React, {useEffect} from "react";
import useChatStore from "@/app/lib/store/useChatStore";
import BubleQuestion from "@/app/components/BubleQuestion";
import BubleAnswer from "@/app/components/BubleAnswer";

export default function Conversation({chatsData}: { chatsData: IChat[] }) {
    const {loadChats, chats} = useChatStore()

    useEffect(() => {
        // console.log(chatsData)
        loadChats(chatsData)
    }, [])

    return (<div className="p-3 basis-[90%]  overflow-y-auto ">
        {
            chats.map((chat, index) => {
                if (chat.isQuestion) {
                    return <BubleQuestion key={index} msg={chat.message}/>
                } else {
                    return <BubleAnswer key={index} msg={chat.message}/>

                }
            })
        }
    </div>)
}