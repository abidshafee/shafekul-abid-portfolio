import React from "react";
import abid from "../assets/ShafekulAbid.png"
//import NavBar from "./NavBar";

// export default function Home() {
//     return <h1>Home</h1>
// }

const Home = () => {
    return (
        <div name="home"
        className ="h-screen w-full pt-20 bg-gradient-to-b from-slate-800 via-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg mx-auto flex items-center 
            flex-col justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-white text-4xl pr-4 sm:7xl font-bold inline border-b-4 border-lime-500">Hello! Shafekul Abid here!</h2>
                    <p className="py-4 max-w-md pr-4">
                        I am working with Software Development Techologies for web and mobile devices such as with React-Native, React, Next, Django Sanity etc.
                        I am also a Practitionar & Pationate about ML, DL, Data Science and Big Data Analytics. My prefered languges of choice are Python,
                        JavaScript, and TSQL etc. Learn more about my work in the Portfolio section.
                    </p>
                    
                    <div>
                    <button className="text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-lime-400 to-lime-600 cursor-pointer hover:scale-105 duration-300">Visit My Portfolio</button>
                    </div>
                </div>
                <div>
                <img src={abid} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    );
}

export default Home;