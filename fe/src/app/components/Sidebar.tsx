'use client';
import React from "react";
import ConversationItem from "@/app/components/ConversationItem";
import {IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler,} from "@material-tailwind/react";
import {BiPlus} from "react-icons/bi";
import {MdDarkMode} from "react-icons/md";
// import navLInk from "./navLink";

export default function Sidebar() {
    const isOpen = true;
    return (
        <div
            className={`z-10 flex top-0 h-screen sm:relative  fixed ease-in-out duration-500 ${
                isOpen ? "translate-x-0 " : "-translate-x-full sm:translate-x-0"
            }  w-full sm:w-fit `}
        >
            <div className={`  w-80 h-full   bg-[#F0F0F0]  p-3 relative`}>

                <div>
                    <ConversationItem/>
                </div>
                <div className={'p-3 right-0 absolute bottom-0'}>
                    <SpeedDial placement={'top'}>
                        <SpeedDialHandler className={`bg-primary`}>
                            <IconButton placeholder={'Menu'} size="lg" className="rounded-full">
                                <BiPlus className="h-5 w-5 transition-transform group-hover:rotate-45"/>
                            </IconButton>
                        </SpeedDialHandler>
                        <SpeedDialContent placeholder={"m"}>
                            <SpeedDialAction placeholder={''}>
                                <MdDarkMode className="h-5 w-5"/>
                            </SpeedDialAction>
                        </SpeedDialContent>
                    </SpeedDial>
                </div>

            </div>
        </div>
    );
}