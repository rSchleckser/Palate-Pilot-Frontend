import { CgProfile } from "react-icons/cg";
import logo from '../images/logo.png';
import '../css/Navbar.css'
import axios from "axios";
import { useEffect } from "react";



const Navbar = () => {

    useEffect(() => {
        axios.get('http://localhost:3000/favorites')
        .then(res => {
            setFavorites(res.data);
        })
        .catch(err => {
            console.log('error: ', err);
        })
    });
    
    return(
        <>
        <div>
            <img src={ logo } height={300} width={150}/>
        </div>
        <div>
            <h1>Welcome to PalatePilot!</h1>
        </div>
        <div id="userIcon">
            <CgProfile />
            <h6>Username</h6>
        </div>
        </>
    )
}

export default Navbar;