'use client'
import React from "react";
import {FaBars} from "react-icons/fa"
import useSidebar from "@/app/lib/store/useSidebar";

export default function HeaderMobile() {
    const {isOpen, onOpen} = useSidebar();


    return (
        <div className="flex items-center justify-between  p-3 px-3 border-b shadow-sm border-b-gray-200 sm:hidden">
            <FaBars size={20} onClick={onOpen}/>

        </div>
    );
}