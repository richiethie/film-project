import { useEffect, useState } from "react";
import { BsCameraReelsFill } from "react-icons/bs";



//add logic to check if signed in

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-between px-20 mt-5">
            <BsCameraReelsFill className="text-5xl"/>
            <button>Sign in</button>
        </div>
    )
}

export default Navbar