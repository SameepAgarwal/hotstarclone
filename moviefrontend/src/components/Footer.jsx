import React from "react";
import styled from 'styled-components';


const FooterDiv = styled.footer`
    margin-top: auto;
    background-color: rgb(18 18 18);
    /* background-color: rgba(0, 0, 0, 0.623); */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 300px;
    width: 100%;
    .footer-details-div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    .connect-with-us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
    }

    .social-media-div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        /* border: 2px solid white; */
    }

    .professional-platforms-div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
    }

    .instagram{
        padding: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            text-align: center;
            padding: 1px;
            border-radius: 5px;
            background: linear-gradient(rgb(241, 6, 245), rgb(255, 0, 89), yellow);
        }
    }
    .facebook {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
    &:hover {
        color: rgb(57, 57, 167);
        z-index: 4;
    }
    .facebook-correction {
        position: absolute;
        left: 5px;
        top: 1px;
        z-index: -1;
        background-color: white;
        height: 20px;
        width: 14px;
    }
}

    .twitter {
        padding: 4px 0px 3px 0px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        &:hover {
        color: white;
        background-color: rgb(64, 154, 244);
        border-radius: 5px;
    }

    }
    .snapchat {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        &:hover {
            color: #f8f875;
            background-color: black;
        }
    }

    .linkedin {
        z-index: 2;
        & span{
            display: block;
            z-index: -1;
            position: relative;
            left: 0.5px;
            bottom: 17.7px;
            width: 20px;
            height: 17px;
        }

        &:hover {
        color: #4646c6;
        }
        &:hover span {
            background-color: white;
        }
    }

    .github{
        & span {
            display: block;
            z-index: -1;
            position: relative;
            left: 3px;
            bottom: 17.7px;
            width: 17px;
            height: 19px;
            border-radius: 7px;
        }
        &:hover span {
            background-color: black;
        }

        &:hover {
            color: white;
        }
    }

    .copyright-line {
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 800px) {
        .footer-details-div {
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            gap: 30px;
        }
        .know-aout-us{
            width: 100%;
            text-align: center;

        }
        .need-help{
            width: 100%;
            text-align: center;

        }
    }
    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;
const Footer = () => {
    return (
        <>
            <FooterDiv className='main-footer-section'>
                <div className='footer-details-div'>
                    <div className="know-aout-us">Know About Website:</div>
                    <div className="need-help">Need Help?</div>
                    <div className="connect-with-us">
                        <h2>Connect With us:</h2>
                        <div className="social-media-div">
                            <div className="instagram"><i className="fa-brands fa-instagram fa-xl"></i></div>
                            <div className="twitter"><i className="fa-brands fa-twitter fa-l"></i></div>
                            <div className="snapchat"><i className="fa-brands fa-square-snapchat fa-xl"></i></div>
                            <div className="facebook">
                                <i className="fa-brands fa-square-facebook fa-xl"></i>
                                <span className="facebook-correction">
                                </span>
                            </div>
                        </div>
                        <div className="professional-platforms-div">
                            <div className="linkedin">
                                <i className="fa-brands fa-linkedin fa-xl"></i>
                                <span></span>
                            </div>
                            <div className="github">
                                <i className="fa-brands fa-github fa-xl"></i>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-line">Copyright <i className="fa-regular fa-copyright fa-xs"></i> | All rights Reserved |</div>
            </FooterDiv>
        </>
    );
};

export default Footer;