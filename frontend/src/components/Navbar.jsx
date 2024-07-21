import { CgProfile } from "react-icons/cg";
import logo from '../images/logo.png';
import '../css/Navbar.css'

const Navbar = () => {
    
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