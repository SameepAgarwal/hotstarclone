import React from "react";
import Footer from "./Footer";
import styled from 'styled-components';


const Section = styled.section`
    .main-error-div{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;

        .error-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: fit-content;
        background-color: white;
        border-radius: 10px;
        padding: 35px;

        img{
            height: -webkit-fill-available;
        }
    }
    .go-back-btn{
        padding: 10px 15px;
        font-size: 15px;
        border: 2px solid gray;
        border-radius: 10px;
        a{
            text-decoration: none;
            color: #080707
        }
        &:hover{
            transform: scale(1.09);
            background-color: #8484844a;
            box-shadow: 0px 4px 5px 1.05px #00000066;
        }
    }
    }
    &::-webkit-scrollbar{
        display: none;
    }
    
`;
export const ErrorPage = () => {
    return (
        <>
            <Section style={{
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
            }}>
                <div className="main-error-div" style={{
                    width: "100%",
                }}>
                    <div className="error-div">
                        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="Error Image" />
                        <button className="go-back-btn"> <a href="/">Go Back to Home</a></button>
                    </div>
                </div>
                <Footer />
            </Section>
        </>
    );
};

export default ErrorPage;

