import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Footer from "./Footer";

const SigninForm = styled.div`
    /* transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); */
    width: 600px;
    margin: auto;
    /* background-color: #373b3b; */
    /* background-color: transparent; */
    background: linear-gradient(20deg, #111460, #58565e24);
    padding: 10px;
    border-radius: 10px;
    font-size: x-large;
    @keyframes makeFlip {
        0%{
            /* transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); */
            transform: rotateY(180deg) rotateX(180deg) scale(0.3);
        }
    }
    .form-div{
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .signin-heading{
        /* border: 2px solid #0eb1b3; */
        /* background-color: #d1e8ff; */   
        background: linear-gradient(45deg, #5252c2 , #26187d);
        color: white;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
        font-size: large;
    }
    .signin-form{
        display: flex;
        flex-direction: column;
        display: none;

        .input-div{
            position: relative;
            margin: 10px 2px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span{
                position: absolute;
                left: 7px;
                top: 20%;
                font-size: 10px;
                font-weight: bolder;
                color: gray;
                transition: all 0.2s ease; 
            }
            .input-name{
                top : ${(props) => props.inputValues.name ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.name ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.name ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.name ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.name ? '2' : 'unset'};
            }
            .input-phone{
                top : ${(props) => props.inputValues.phone ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.phone ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.phone ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.phone ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.phone ? '2' : 'unset'};
            }
            .input-email{
                top : ${(props) => props.inputValues.email ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.email ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.email ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.email ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.email ? '2' : 'unset'};
            }
            .input-password{
                top : ${(props) => props.inputValues.password ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.password ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.password ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.password ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.password ? '2' : 'unset'};
            }
            .input-cpassword{
                top : ${(props) => props.inputValues.cpassword ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.cpassword ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.cpassword ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.cpassword ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.cpassword ? '2' : 'unset'};
            }
            input{
                width: 100%;
                padding: 14px 10px;
                background-color: transparent;
                z-index: 2;
                border-color: #545557;
                color: white;
                border-width: 1px;
            }
            input:focus{
                outline: none;
                border: 1px solid #78797a;
                z-index: 1;
            }
            input:focus + span {
                display: inline;
                position: absolute;
                top: -1px;
                font-size: 10px;
                z-index: 2;
                color: #b3b4b5;
                /* background: linear-gradient(20deg, #111460, #58565e24); */
                background: linear-gradient(20deg, #121558, #38383824);
            }

        }
        .form-input-tag{
            overflow: visible;
            margin: 10px;
            border: 2px solid black;
            margin: 5px 0px;
            border-radius: 5px;
        }

        .signin-btn{
            cursor: pointer;
            width: 100px;
            margin: auto;
            padding: 10px 2px;
            border: none;
            border-radius: 5px;
            font-size: 17px;
            color: #ffffff;
            background: linear-gradient(93.87deg,#095ae6,#062794);
            &:hover{
                /* background-color: #0eb1b3; */
                transform: scale(1.09);
            }
        }
    }

    .already-signed-in{
        color: white;
        font-size: 13px;
        text-align: center;
        padding: 20px 0px 10px 0px ;

        .login-link{
            color: blue;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        .signin-heading{
            font-size: 16px;
            margin: 2px;
        }
        .signin-form{
            .input-div{
                margin: 2px 2px;
                span{
                    position: absolute;
                    left: 7px;
                    top: 20%;
                    font-size: 10px;
                    font-weight: bolder;
                    color: gray;
                    transition: all 0.2s ease; 
                }
                .input-name{
                    top : ${(props) => props.inputValues.name ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.name ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.name ? '#373b3b' : '#373b3b'}; */
                }
                .input-phone{
                    top : ${(props) => props.inputValues.phone ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.phone ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.phone ? '#373b3b' : '#373b3b'}; */
                }
                .input-email{
                    top : ${(props) => props.inputValues.email ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.email ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.email ? '#373b3b' : '#373b3b'}; */
                }
                .input-password{
                    top : ${(props) => props.inputValues.password ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.password ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.password ? '#373b3b' : '#373b3b'}; */
                }
                .input-cpassword{
                    top : ${(props) => props.inputValues.cpassword ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.cpassword ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.cpassword ? '#373b3b' : '#373b3b'}; */
                }
                input{
                    padding: 10px 10px;
                    background-color: transparent;
                    z-index: 2;
                    border-color: #545557;
                    color: white;
                    border-width: 1px;
                }
                input:focus{
                }
                input:focus + span {
                    top: -1px;
                    font-size: 10px;
                    /* background: linear-gradient(20deg, #111460, #58565e24); */
                    /* background: linear-gradient(20deg, #121558, #38383824); */
                }

            }
            .form-input-tag{
                overflow: visible;
                margin: 10px;
                border: 2px solid black;
                margin: 5px 0px;
                border-radius: 5px;
            }
            .signin-btn{
                margin: 7px auto 0px auto;
                padding: 10px 2px;
                font-size: 16px;
            }
        }
        .already-signed-in{
            font-size: 13px;
            text-align: center;
            padding: 14px 0px 0px 0px ;
            .login-link{
                /* font-weight: bold; */
            }
        }
    }
`;

const LoginForm = styled.div`
    width: 500px;
    margin: auto;
    background: linear-gradient(20deg, #111460, #58565e24);
    padding: 10px;
    border-radius: 10px;
    font-size: x-large;
    @keyframes makeFlip {
        0%{
            transform: rotateY(180deg) rotateX(180deg) scale(0.3);
        }
    }
    .login-form-div{
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .login-heading{
        background: linear-gradient(45deg, #5252c2 , #26187d);
        color: white;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
        font-size: large;
    }
    .login-form{
        display: flex;
        flex-direction: column;
        display: none;

        .input-div{
            position: relative;
            margin: 10px 2px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span{
                position: absolute;
                left: 7px;
                top: 20%;
                font-size: 10px;
                font-weight: bolder;
                color: gray;
                transition: all 0.2s ease; 
            }
            .input-email{
                top : ${(props) => props.inputValues.email ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.email ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.email ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.email ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.email ? '2' : 'unset'};
            }
            .input-password{
                top : ${(props) => props.inputValues.password ? '-1px' : '20%'};
                font-size : ${(props) => props.inputValues.password ? '10px' : '17px'};
                /* background-color: ${(props) => props.inputValues.password ? '#373b3b' : '#373b3b'}; */
                color: ${(props) => props.inputValues.password ? '#b3b4b5' : 'gray'};
                z-index: ${(props) => props.inputValues.password ? '2' : 'unset'};
            }
            input{
                width: 100%;
                padding: 14px 10px;
                background-color: transparent;
                z-index: 2;
                border-color: #545557;
                color: white;
                border-width: 1px;
            }
            input:focus{
                outline: none;
                border: 1px solid #78797a;
                z-index: 1;
            }
            input:focus + span {
                display: inline;
                position: absolute;
                top: -1px;
                font-size: 10px;
                z-index: 2;
                color: #b3b4b5;
                /* background: linear-gradient(20deg, #111460, #58565e24); */
                background: linear-gradient(20deg, #121558, #38383824);
            }

        }
        .form-input-tag{
            overflow: visible;
            margin: 10px;
            border: 2px solid black;
            margin: 5px 0px;
            border-radius: 5px;
        }

        .login-btn{
            cursor: pointer;
            width: 100px;
            margin: auto;
            padding: 10px 2px;
            border: none;
            border-radius: 5px;
            font-size: 17px;
            color: #ffffff;
            background: linear-gradient(93.87deg,#095ae6,#062794);
            &:hover{
                /* background-color: #0eb1b3; */
                transform: scale(1.09);
            }
        }
    }

    .not-signed-in{
        color: white;
        font-size: 13px;
        text-align: center;
        padding: 20px 0px 10px 0px ;

        .signin-link{
            color: blue;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 600px) {
        width: 90%;
        .login-heading{
            font-size: 16px;
            margin: 2px;
        }
        .login-form{
            .input-div{
                margin: 2px 2px;
                span{
                    position: absolute;
                    left: 8px;
                    font-weight: bolder;
                    color: gray;
                    transition: all 0.2s ease; 
                }
                .input-email{
                    top : ${(props) => props.inputValues.email ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.email ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.email ? '#373b3b' : '#373b3b'}; */
                }
                .input-password{
                    top : ${(props) => props.inputValues.password ? '-1px' : '30%'};
                    font-size : ${(props) => props.inputValues.password ? '10px' : '13px'};
                    /* background-color: ${(props) => props.inputValues.password ? '#373b3b' : '#373b3b'}; */
                }
                input{
                    padding: 10px 10px;
                    background-color: transparent;
                    z-index: 2;
                    border-color: #545557;
                    color: white;
                    border-width: 1px;
                }
                input:focus{
                }
                input:focus + span {
                    top: -1px;
                    font-size: 10px;
                    /* background: linear-gradient(20deg, #111460, #58565e24); */
                    /* background: linear-gradient(20deg, #121558, #38383824); */
                }

            }
            .form-input-tag{
                overflow: visible;
                margin: 10px;
                border: 2px solid black;
                margin: 5px 0px;
                border-radius: 5px;
            }
            .login-btn{
                margin: 7px auto 0px auto;
                padding: 10px 2px;
                font-size: 16px;
            }
        }
        .not-signed-in{
            font-size: 13px;
            text-align: center;
            padding: 14px 0px 0px 0px ;
            .signin-link{
                /* font-weight: bold; */
            }
        }
    }
`;

const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    height: 100%;
    margin: auto;

    .personal-details-div{
        padding: 10px;
        width: 500px;
        border-radius: 10px;
        background-color: #111460;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background: linear-gradient(45deg, blue , black ); */
        /* background: linear-gradient(45deg, white , white, black ); */
        color: white;
        &:hover{
            animation: makeReadable 0.7s ease-in-out forwards;
        }
        @keyframes makeReadable {
            /* 0%{
                background: linear-gradient(45deg, white , white ,black);
            }
            33%{
                background: linear-gradient(45deg, white , black, blue );
            }
            66%{
                background: linear-gradient(45deg, black , blue, blue );
            } */
            100%{
                background: linear-gradient(40deg, #111460, #58565e24);
            }
        }
        
        .greet-heading{
            width: 100%;
            padding: 10px;
            text-align: center;
        }
        .main-details-div{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            font-size: 20px;
            .details-div{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid white;
                margin: 10px;
                padding: 10px;
                padding-bottom: 0px;
                font-family: monospace;
                h6{
                    font-size: 17px;
                }
                p{
                }
            }
        }
        
    }
    .logout-btn{
        padding: 6px 10px;
        border: none;
        font-weight: bold;
        font-size: 15px;
        border-radius: 10px;
        margin: 20px;
        cursor: pointer;
        border: 2px solid white;
        a{
            text-decoration: none;
        }
        &:hover{
            background-color: #111460;
            a{
                background-color: #111460;
                color: white;
            }
        }
    }
    .logout-link{
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        .personal-details-div{
            width: 90%;
            background-color: #111460;
            color: white;
            /* background: linear-gradient(45deg, blue , black ); */
            /* background: linear-gradient(45deg, white , white, black ); */
            &:hover{
                animation: makeReadable 0.7s ease-in-out forwards;
            }
            @keyframes makeReadable {
                100%{
                    background: linear-gradient(40deg, #111460, #58565e24);
                }
            }
            .user-name{
                text-transform: capitalize;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }
            .greet-heading{
                font-size: 19px;
                padding: 10px;
            }
            .greet-welcome{
                font-size: 16px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
            .main-details-div{
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                font-size: 14px;

                .details-div{
                    width: 100%;
                    justify-content: space-between;
                    border-bottom: 2px solid white;
                    margin: 10px 0px;
                    padding: 10px 0px;
                    padding-bottom: 0px;
                    font-family: monospace;
                    h6{
                        font-size: 15px;
                    }
                }
            }
        }
        .logout-btn{
            padding: 6px 10px;
            font-size: 15px;
            margin: 20px;
            border: 2px solid white;
        }
    }
`;

const MainForm = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

const SigninPage = () => {
    const initialSigninData = { name: '', email: '', phone: '', password: '', cpassword: '' };
    const initialLoginData = { name: '', email: '', phone: '', password: '' };
    const [signinData, setSigninData] = useState(initialSigninData);
    const [loginData, setLoginData] = useState(initialLoginData);
    // const [loading, setLoading] = useState(false);
    // const [logoutStatus, setLogoutStatus] = useState(true);
    const [signinStatus, setSigninStatus] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [loadingAnimation, setLoadingAnimation] = useState(false);

    const signinUser = async (e) => {
        e.preventDefault();
        setLoadingAnimation(true);
        const { name, email, phone, password, cpassword } = signinData;

        if (!name || !email || !phone || !password || !cpassword) {
            alert('Enter Details Correctly!');
            setLoadingAnimation(false);
            return;
        }

        try {
            const res = await fetch('/getsignin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                    cpassword,
                })
            });

            // console.log(res);
            const result = await res.json();
            console.log(result);
            if (res.status !== 200) {
                if (result.code === 11000) {
                    if (result.keyPattern.phone) {
                        alert(`Phone already Registered!`);
                    }
                    if (result.keyPattern.email) {
                        alert('Email Already Resistered');
                    }
                }
                setLoadingAnimation(false);
            }
            else {
                // const ans = JSON.stringify(result);
                alert("Signned in Successfully!");
                setSigninData(initialSigninData);
                setLoadingAnimation(false);
                setSigninStatus(!signinStatus);
            }
        } catch (e) {
            setLoadingAnimation(false);
            console.log(e);
        }
    };
    const loginUser = async (e) => {
        e.preventDefault();
        setLoadingAnimation(true);
        const { email, password } = loginData;
        try {
            if (!email || !password) {
                alert('Fill Data Correctly');
                setLoadingAnimation(false);
                return;
            }

            const res = await fetch('/getlogin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const result = await res.json();
            if (res.status !== 200) {
                alert('Invalid Credentials:');
                setLoadingAnimation(false);
            }
            else {
                console.log(result);
                alert('User Logged IN');
                setLoginData({
                    email: result.email,
                    phone: result.phone,
                    name: result.name
                });
                setLoginStatus(true);
                setLoadingAnimation(false);
            }

        } catch (e) {
            console.log(e);
            setLoadingAnimation(false);
        }
    };
    const logoutUser = async (e) => {
        e.preventDefault();
        setLoadingAnimation(true);

        const res = await fetch('/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await res.json();
        if (res.status === 200) {
            alert('User Logged Out');
            console.log(result);
            setLoginStatus(false);
            setLoadingAnimation(false);
        }

    };

    const signinInputChangeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSigninData((oldObj) => {
            return { ...oldObj, [name]: value };
        });
    };
    const loginInputChangeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginData((oldObj) => {
            return { ...oldObj, [name]: value };
        });
    };
    const authenticateUser = async () => {

        try {
            const res = await fetch('/getlogindata', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            const data = await res.json();

            if (res.status !== 200) {
                throw new Error(data.error);
            }
            setLoginStatus(true);
            setLoginData(data);
            console.log("USER already Logged inn!!");
        } catch (e) {
            console.log(" I AM HERE ");
            console.log(e);
            setLoginStatus(false);
        }
    };
    const makeSigninCardFlip = (e) => {
        const main_div = document.querySelector('.main-form-div');
        main_div.style.animation = 'makeFlip 2s ease 0s 1 normal';
        // main_div.style.animation = '';
        const form = document.querySelector('.signin-form');
        form.style.display = 'flex';
        // const form_div = document.querySelector('.form-div');
    };

    const makeLoginCardFlip = (e) => {
        const main_div = document.querySelector('.main-form-div');
        main_div.style.animation = 'makeFlip 2s ease 0s 1 normal';
        // main_div.style.animation = '';
        const form = document.querySelector('.login-form');
        form.style.display = 'flex';
    };
    const convertStatus = (e) => {
        setSigninStatus(!signinStatus);
    };
    useEffect(() => {
        authenticateUser();
    }, []);
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                background: 'linear-gradient(20deg, #111460, #58565e24)',
                width: '100%',
            }}>
                <MainForm>
                    {
                        !loginStatus ?
                            <>{
                                signinStatus ?
                                    <SigninForm className="main-form-div main-signin-form-div" inputValues={signinData} >
                                        <div onClick={makeSigninCardFlip} className="form-div">
                                            <h2 className="signin-heading" >Sign In to Hotstar Clone</h2>
                                            <form method="POST" className="signin-form">
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="name" name='name' value={signinData.name} onChange={signinInputChangeEvent} />
                                                    <span className="input-name">Name</span>
                                                </div>
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="email" name='email' value={signinData.email} onChange={signinInputChangeEvent} />
                                                    <span className="input-email">Email</span>
                                                </div>
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="phone" name='phone' value={signinData.phone} onChange={signinInputChangeEvent} />
                                                    <span className="input-phone">Phone</span>
                                                </div>
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="password" name='password' value={signinData.password} onChange={signinInputChangeEvent} />
                                                    <span className="input-password">Password</span>
                                                </div>
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="password" name='cpassword' value={signinData.cpassword} onChange={signinInputChangeEvent} />
                                                    <span className="input-cpassword">Confirm Password</span>
                                                </div>
                                                <button className="signin-btn" type="submit" onClick={signinUser}>
                                                    {!loadingAnimation ? <>Sign In</> : <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
                                                </button>
                                            </form>
                                        </div>
                                        <p className="already-signed-in">Already Signed Up? <a className="login-link" href="#" onClick={convertStatus}>Login</a></p>
                                    </SigninForm> :
                                    <LoginForm className="main-form-div main-login-form-div" inputValues={loginData} >
                                        <div onClick={makeLoginCardFlip} className="login-form-div">
                                            <h2 className="login-heading" >Log In to Hotstar Clone</h2>
                                            <form method="POST" className="login-form">
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="email" name='email' value={loginData.email} onChange={loginInputChangeEvent} />
                                                    <span className="input-email">Email</span>
                                                </div>
                                                <div className="input-div">
                                                    <input className="form-input-tag" type="password" name='password' value={loginData.password} onChange={loginInputChangeEvent} />
                                                    <span className="input-password">Password</span>
                                                </div>
                                                <button className="login-btn" type="submit" onClick={loginUser}>
                                                    {!loadingAnimation ? <>Log In</> : <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
                                                </button>
                                            </form>
                                        </div>
                                        <p className="not-signed-in">Not Signed Up? <a className="signin-link" href="#" onClick={convertStatus}>Signup</a></p>
                                    </LoginForm>
                            }</>
                            :
                            <>
                                <DetailsDiv className="details-form-div">
                                    <section className="personal-details-div">
                                        <h2 className="greet-heading">Hello,<span className="user-name"> {loginData.name}</span></h2>
                                        <h2 className="greet-welcome">Welcome Back </h2>
                                        <div className="main-details-div">
                                            <div className="details-div">
                                                <h6>Name:</h6>
                                                <p>{loginData.name}</p>
                                            </div>
                                            <div className="details-div">
                                                <h6>Email:</h6>
                                                <p>{loginData.email}</p>
                                            </div>
                                            <div className="details-div">
                                                <h6>Phone No:</h6>
                                                <p>{loginData.phone}</p>
                                            </div>
                                        </div>
                                    </section>
                                    <button className="logout-btn" onClick={logoutUser}>
                                        {!loadingAnimation ? <a href="#" className="logout-link">Logout</a> : <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
                                    </button>
                                </DetailsDiv>
                            </>
                    }
                </MainForm>
                <Footer />
            </div>
        </>
    );
};

export default SigninPage;