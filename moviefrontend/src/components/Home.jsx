import React from "react";
import Navbar from "./Navbar";
import HomePage from './HomePage';

const Home = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: "row", height: "100vh", overflowY: "scroll", justifyContent: 'flex-start', backgroundColor: '#191818f7' }}>
                <Navbar />
                <HomePage />
            </div>
        </>
    );
};

export default Home;

