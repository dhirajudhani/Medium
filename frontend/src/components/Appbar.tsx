import { Avatar } from "./BlogCard"


export const Appbar = ( ) => {
    return <div className="border-b flex justify-between px-10 py-2">
        <div className="flex justify-center items-center font-bold text-lg"> Medium </div>
        <div>
            <Avatar size="big" name="Dhiraj udhani"/>
        </div>
    </div>
}