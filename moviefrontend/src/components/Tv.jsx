import React from "react";
import Navbar from "./Navbar";
import TvPage from "./TvPage";
const Tv = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                height: "100vh",
                overflowY: "scroll",
                justifyContent: 'flex-start',
                backgroundColor: '#191818f7'
            }}>
                <Navbar />
                <TvPage />
            </div>
        </>
    );
};

export default Tv;

