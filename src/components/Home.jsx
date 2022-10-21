import React from "react";
import NavBar from "./NavBar";

// export default function Home() {
//     return <h1>Home</h1>
// }

const Home = () => {
    return (
        <>
        <NavBar/>
        <div name="home"
        className ="h-screen w-full pt-20 bg-gradient-to-b from-indigo-800 to-gray-800"
        >
            <div>
            <h2 className="text-white text-xl">Portfolio Home</h2>
            </div>
        </div>
        </>    
    );
}

export default Home;