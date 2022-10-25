import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "/",
            name: "Shafekul Abid"
        },
        {
            id: 2,
            link: "/Posts",
            name: "Blog"
        },
        {
            id: 3,
            link: "/Project",
            name: "Projects"
        },
        {
            id: 4,
            link: "/About",
            name: "About"
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 shadow fixed 
        bg-gradient-to-b from-slate-900 to-slate-700 text-white px-4">
            <div>
                <h1 className="text-5xl ml-3 hover:scale-105 duration-200 cursor-pointer">SA</h1>
            </div>

            <ul className="hidden md:flex">
                {
                    links.map(({id, link, name}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium 
                        text-white hover:scale-110 duration-200" activeClassName="bg-gray-600">
                            <Link to={link}>{name}</Link>
                        </li>  
                    ))
                }
            </ul>
            <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-3 z-10 text-white md:hidden">
                {nav? <FaTimes size={30}/>:<FaBars size={30}/>}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center
                absolute top-0 left-0 w-full h-screen bg-slate-600 
                text-white">
                     {
                        links.map(({id, link, name}) => (
                            <li key={id} className="px-4 cursor-pointer capitalize 
                            py-6 text-4xl">
                                <Link to={link}>{name}</Link>
                            </li>  
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default NavBar;