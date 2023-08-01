import React from "react";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
const Error = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: "row", width: "100vw", height: "100vh", overflowY: "scroll", justifyContent: 'left', backgroundColor: '#191818f7' }}>
                <Navbar />
                <ErrorPage />
            </div>
        </>
    );
};

export default Error;