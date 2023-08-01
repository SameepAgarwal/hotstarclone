import React from "react";
import Navbar from "./Navbar";
import PromptPage from "./PromptPage";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-y: scroll;
    justify-content: flex-start;
    background-color: #191818f7;
`;

const prompt = () => {
    return (
        <>
            <Div className="initial-page">
                <Navbar />
                <PromptPage />
            </Div>
        </>
    );
};

export default prompt;
