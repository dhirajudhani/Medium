import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import medium from '../assets/medium-fPPq8BEp.png'

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
        <div className="flex">
            <img className="w-9 h-9 cursor-pointer" src={medium} alt="" />
               <div className="ml-3 mt-1 font-bold text-lg">Medium</div> 
               </div>
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                
            </Link>
            <Link to={`/signin`}>
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Logout</button></Link>

            <Avatar size={"big"} name="Dhiraj Udhani" />
        </div>
    </div>
}