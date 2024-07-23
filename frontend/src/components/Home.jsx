//import Navbar from "./Navbar";
// import Card from "./Card";
// import Favorites from "./Favorites";
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth/login');
    };

    const handleSignupClick = () => {
        navigate('/auth/signup');
    };

    return (
        <div>
            <h1>Welcome to Palate Pilot!</h1>
            {/* <Favorites />
            <Card /> */}

            <div>
                <button className="login-button" onClick={handleLoginClick}>
                    Login here
                </button>
            </div>

            <div>
                <button className="signup-button" onClick={handleSignupClick}>
                    Signup here
                </button>
            </div>

        </div>


    );
}

export default Home;
