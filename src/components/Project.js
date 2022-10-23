import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

export default function Project() {

    const projects = [
        {
            id: 1,
            src: proj1
        },
        {
            id: 2,
            src: proj2
        },
        {
            id: 3,
            src: proj3
        },
        {
            id: 4,
            src: proj4
        }
    ]

    return (
        <div name="Projects"
        className ="bg-gradient-to-b from-black to-gray-800 text-white"
        >
           <div className="max-w-screen-lg p-4 mx-auto 
           flex flex-col w-full h-fit py-32">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-rose-700">My Projects</h2>
                    <p className="py-6">
                        Some of my project has been showcased here.
                    </p>
                </div>
             

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5
                px-12 sm:px-0">
                       {
                    projects.map(({id, src}) => (
                        <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
                        <img src={src} alt="p-imgs" className="rounded-md duration-200
                        hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        </div>
                    </div>
                    ))
                }                    
                </div>
           </div>
        </div>
    )
}