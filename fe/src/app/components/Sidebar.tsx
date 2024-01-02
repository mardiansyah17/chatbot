'use client';
import React from "react";
import axios from "axios";
import useChatStore from "@/app/lib/store/useChatStore";
import {API_URL} from "@/app/lib/constant";
import useSidebar from "@/app/lib/store/useSidebar";
import {FaXmark} from "react-icons/fa6";
// import navLInk from "./navLink";

export default function Sidebar() {
    const {isOpen, onClose} = useSidebar();
    const {deleteChats} = useChatStore()
    const deleteHandler = async () => {
        await axios.delete(`${API_URL}/chat`).then((res) => {
            deleteChats()
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div
            className={`z-10 flex top-0 h-screen sm:relative  fixed ease-in-out duration-500 ${
                isOpen ? "translate-x-0 " : "-translate-x-full sm:translate-x-0"
            }  w-full sm:w-fit `}
        >
            <div className={`  w-80 h-full   bg-[#F0F0F0]  p-3 relative`}>
                <FaXmark onClick={onClose} size={27} className={"absolute top-5 right-10 block md:hidden"}/>

                <div className={`mt-14`}>
                    <button
                        onClick={deleteHandler}
                        className="border  border-primary  text-slate-700 w-full p-2 rounded-md mb-2 block">
                        <h6 className={`text-[0.9rem]`}>Hapus percakapan</h6>

                    </button>
                </div>


            </div>
        </div>
    );
}