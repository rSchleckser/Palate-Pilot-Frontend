import React from "react";

const Profile = () => {
    
    
    return(
        <>
            <div>
                <div>
                    {/*Navbar component here*/}
                </div>

                <div>
                    <h1>Welcome to your profile!</h1>
                </div>
                <div>
                    <h3>Username: ${req.body.username}</h3>
                    <h3>Email: ${req.body.email}</h3>
                </div>
                <div>
                    {/*Profile pic here if time allows*/}
                </div>
                <div>
                   {/*Favorites component here*/}
                </div>
                <dov>
                    {/*Reviews component here*/}
                </dov>
            </div>
        </>
    )
}

export default Profile;