import React from "react";
import Navbar from "./Navbar";
import SeriesPage from "./SeriesPage";
const Series = () => {
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
                <SeriesPage />
            </div>
        </>
    );
};

export default Series;

