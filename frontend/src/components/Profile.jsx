// import {useState, useEffect} from "react";
import Favorites from "./Favorites";
import Navbar from "./Navbar";
// import axios from 'axios';
import '../App.css';


const Profile = () => {

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     axios.get('http://localhost:3000/profile')
    //     .then(res => {
    //         setUser(res.data);
    //     })
    //     .catch(err => {
    //         console.log('error: ', err);
    //     })
    // });
    
    
    return(
        <>
            <div>
                <div>
                <h1 className="profile-title">Welcome to your profile!</h1>

                </div>
                {/* <div>
                    <h3>Username: ${user.username}</h3>
                    <h3>Email: ${user.email}</h3>
                </div> */}
                <div>
                    {/*Profile pic here if time allows*/}
                </div>
                {/* <div>
                   <Favorites />
                </div> */}
                <dov>
                    {/*Reviews component here*/}
                </dov>
            </div>
        </>
    )
}

export default Profile;