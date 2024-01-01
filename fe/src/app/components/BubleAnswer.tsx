export default function BubleAnswer({msg}: { msg: string }) {
    return <div className="flex items-center  justify-end  mb-4 ">
        <div className="  bg-secondary text-green-100 p-2 rounded-lg mb-2 relative w-fit">
            <div>{msg}</div>
            {/* arrow */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-secondary"/>
            {/* end arrow */}
        </div>
    </div>
}