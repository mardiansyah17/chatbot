import React from "react";
import Link from "next/link";


const ConversationItem = () => {


    return (
        <Link href={'/chat/1'}
              className="border  border-primary  text-slate-700 p-2 rounded-md mb-2 block">
            <h6 className={`text-[0.9rem]`}>Apa itu PHP</h6>

        </Link>
    )
        ;
};

export default ConversationItem;