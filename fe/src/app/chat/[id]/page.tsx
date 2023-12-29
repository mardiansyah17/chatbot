import BubleChat from "@/app/components/BubleChat";
import {FaPaperPlane} from "react-icons/fa";
import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col basis-full">

            <div className="p-3 basis-[90%]  overflow-y-auto ">
                <BubleChat/>

            </div>
            <form
                className="basis-[10%] border-t border-t-gray-200 p-3 flex items-center space-x-4 px-5"
                action=""
            >
                <input
                    placeholder={"Masukan pesan anda"}
                    type="text"
                    className="outline-none border border-primary p-1 rounded-md active:border-primary w-full"
                />
                <button type="submit">
                    <FaPaperPlane className="text-primary"/>
                </button>
            </form>
        </div>
    )
}
