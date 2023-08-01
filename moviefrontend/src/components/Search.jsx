import React from "react";
import Navbar from "./Navbar";
import SearchPage from "./SearchPage";
const Search = () => {

    

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
                <SearchPage />
            </div>
        </>
    );
};

export default Search;

