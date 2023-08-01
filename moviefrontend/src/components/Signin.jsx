import React from "react";
import SigninPage from "./SigninPage";
import Navbar from "./Navbar";



const Signin = () => {
    const closeForm = (e) => {
        const form = document.querySelector('.signin-form') || document.querySelector('.login-form');
        if (form) form.style.display = 'none';
        const main_div = document.querySelector('.main-form-div');
        if (main_div) main_div.style.animation = '';
    };

    return (
        <>
            <div onDoubleClick={closeForm} style={{ display: 'flex', flexDirection: "row", width: "100vw", height: "100vh", overflowY: "scroll", justifyContent: 'left', backgroundColor: '#191818f7' }}>
                <Navbar />
                <SigninPage />
            </div>
        </>
    );
};


export default Signin;