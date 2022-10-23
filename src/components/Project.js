import React from "react";

export default function Project() {
    return (
        <div name="Projects"
        className ="bg-gradient-to-b from-black to-gray-800
        w-full text-white md:h-screen"
        >
           <div className="max-w-screen-lg p-4 mx-auto 
           flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-rose-700">My Projects</h2>
                    <p className="py-6">
                        Some of my project has been showcased here.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0">
                    <div className="shadow-md shadow-gray-700 rounded-lg">
                        <img src="#" alt="p-imgs" className="rounded-md duration-200
                        hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}