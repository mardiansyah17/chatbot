import {FaPaperPlane} from "react-icons/fa";
import React from "react";

export default function ChatInput() {
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