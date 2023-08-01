import React from "react";
import Navbar from "./Navbar";
import MoviesPage from "./MoviesPage";
const Movies = () => {
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
                <MoviesPage />
            </div>
        </>
    );
};


export default Movies;
