import {AiOutlineLoading} from "react-icons/ai";

export default function Loading() {
    return <div className={`flex items-center justify-center basis-full`}>

        <AiOutlineLoading className={"animate-spin text-[7rem] text-primary text-center"}/>
    </div>
};