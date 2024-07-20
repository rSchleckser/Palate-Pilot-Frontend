import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    
    return(
        <>
        <div>
            {/* Logo image here */}
        </div>
        <div>
            <h1>Welcome to PalatePilot!</h1>
        </div>
        <div>
            <CgProfile />
            <h6>Username</h6>
        </div>
        </>
    )
}

export default Navbar;