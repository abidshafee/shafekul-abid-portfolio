import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {

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
        <div className="flex justify-between items-center w-full h-20 fixed 
        bg-gradient-to-b from-black via-gray-900 to-blue-800 text-white px-4">
            <div>
                <h1 className="text-5xl ml-3 hover:scale-105 duration-200 cursor-pointer">SA</h1>
            </div>

            <ul className="hidden md:flex">
                {
                    links.map(({id, link, name}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium 
                        text-white hover:scale-110 duration-200">
                            {/* {link.name} */}
                            <Link to={link}>{name}</Link>
                        </li>  
                    ))
                }
            </ul>
            <div className="cursor-pointer pr-3 z-10 text-white">
                <FaBars size={30}/>
            </div>
        </div>
    )
}

export default NavBar;