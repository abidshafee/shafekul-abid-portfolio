import React from "react";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Project from "./Project";


const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Post'
        },
        {
            id: 4,
            link: 'SinglePost'
        },
        {
            id: 5,
            link: 'Project'
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 fixed bg-black text-white px-4">
            <div>
                <h1 className="text-5xl ml-3 hover:scale-105 duration-200 cursor-pointer">SA</h1>
            </div>

            <ul className="flex">
                {
                    links.map(({id, link}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium 
                        text-gray-500 hover:scale-110 duration-200">
                            {link}
                        </li>
                    ))
                }


            </ul>
        </div>
    )
}

export default NavBar;