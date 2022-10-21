import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";


const NavBar = () => {

    const links = [
        {
            id: 1,
            link: "/",
            name: "Home"
        },
        {
            id: 2,
            link: "/About",
            name: "About"
        },
        {
            id: 3,
            link: "/Post",
            name: "Posts"
        },
        {
            id: 4,
            link: "/SinglePost",
            name: "SinglePost"
        },
        {
            id: 5,
            link: "/Project",
            name: "Project"
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 fixed bg-gradient-to-b from-black via-gray-900 to-blue-800 text-white px-4">
            <div>
                <h1 className="text-5xl ml-3 hover:scale-105 duration-200 cursor-pointer">SA</h1>
            </div>

            <ul className="flex">
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
        </div>
    )
}

export default NavBar;