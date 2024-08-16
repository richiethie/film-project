import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { GiBrain } from "react-icons/gi";

const Home = () => {
    return (
        <div className="h-full flex flex-col justify-center content-center">
            <div id="space" className="w-screen flex flex-col justify-center content-center bg-[url('/src/assets/film-strip3.png')]">
                <Navbar />
                <div className="flex flex-col mt-60 mb-60">
                    <h1 className="font-black text-5xl drop-shadow-md">Small Films, Big Impact: Watch, Share, Create</h1>
                    <h3 className="font-bold text-xl p-5 drop-shadow-md">Ready to enjoy? Enter your email to create your account.</h3>
                    <div className="py-3">
                        <input className="h-full w-[30%] px-5 bg-slate-800/[.4] border-solid border-white border-1 rounded-md" placeholder="Email address"></input>
                        <button className="h-full ml-2">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center -mt-20 h-40">
                <div id="brain-box" className="flex justify-center items-center w-[70%]">
                    <GiBrain className="text-7xl m-5"/>
                    <p className="text-2xl p-5">Explore the creative minds of innovative short filmmakers.</p>
                </div>
            </div>
        </div>
    )
}

export default Home