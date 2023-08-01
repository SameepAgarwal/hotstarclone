import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Img = styled.img`
    background-color: white;
    color-scheme: white;
    @media screen and (max-width: 800px){
        height: 32px;
        width: 32px;
    }
`;

const NavDiv = styled.div`
    .active{
        font-weight: 700;
        font-size: x-large;

        .fa-solid{
            font-weight: bolder;
            font-size: x-large;
        }
    }
`;
const MainDiv = styled.div`

    min-width: 65px;
    height: 100vh;
    position: relative;
    z-index: 10;

    .navbar-div {
        height: 100%;
        display: grid;
        /* grid-template-rows: 1fr 1fr 1fr; */
        grid-template-areas: 
        '.'
        'mainnavbar'
        'loginarea';
        align-items: center;
        background-color: black;
        box-shadow: 0.9rem 0rem 1rem black;

        /* background-color: rgba(255, 255, 255, 0.481);
        box-shadow: 0.9rem 0rem 1rem rgba(255, 255, 255, 0.481); */
        padding: 13px;
        position: absolute;
        bottom: 0;
    }

    .navbar-logo-div{
        max-width: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .navbar-redirect-btn-div{
        grid-area: 'mainnavbar';
    }
    .navbar-login-div{
        grid-area: 'loginarea';
    }
    .navbar-div:hover +.give-back-drop {
        z-index: -1;
        position: absolute;
        background-color: transparent;
        height: 100vh;
        width: 75vw;
        background: linear-gradient(90.43deg, rgba(15, 16, 20, .95) 16.24%, rgba(15, 16, 20, 0) 98.46%);
    }
    @media screen and (max-width: 800px){        
        .navbar-div:hover +.give-back-drop{
            width: 25vw;
        }
    }
    @media screen  and (max-width: 500px){
        min-width: 50px;

        .navbar-div{
            padding: 0px;
        }
    }
`;


const Navbar = () => {
    return (
        <>
            <MainDiv className="main-navbar-div">
                <div className="navbar-div">
                    <div className="navbar-logo-div">
                        <Img width="64" height="64" src="https://img.icons8.com/small/128/disney-hotstar.png" alt="disney-hotstar" />
                        <a href="/" className="navbar-logo">Hotstart Clone</a>
                    </div>
                    <NavDiv className="navbar-redirect-btn-div">
                        <NavLink to="/signin" className="navbar-tv-btn navbar-redirect-btn">
                            <span className="tv-icon navbar-btn-icon"><i className="fa-solid fa-user"></i></span>
                            <span className="navbar-redirect-name">My Space</span>
                        </NavLink>
                        <NavLink to="/" className="navbar-home-btn navbar-redirect-btn">
                            <span className="home-icon navbar-btn-icon"><i className="fa-solid fa-house --fa-style"></i></span>
                            <span className="navbar-redirect-name">Home</span>
                        </NavLink>
                        <NavLink to="/search" className="navbar-search-btn navbar-redirect-btn">
                            <span className="search-icon navbar-btn-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <span className="navbar-redirect-name">Search</span>
                        </NavLink>
                        <NavLink to="/movies" className="navbar-movie-btn navbar-redirect-btn">
                            <span className="movie-icon navbar-btn-icon"><i className="fa-solid fa-film"></i></span>
                            <span className="navbar-redirect-name">Movies</span>
                        </NavLink>
                        <NavLink to="/series" className="navbar-sports-btn navbar-redirect-btn">
                            <span className="sports-icon navbar-btn-icon">
                                <i className="fa-solid fa-video"></i>
                            </span>
                            <span className="navbar-redirect-name">Series</span>
                        </NavLink>
                        <NavLink to="/tv" className="navbar-tv-btn navbar-redirect-btn">
                            <span className="tv-icon navbar-btn-icon"><i className="fa-solid fa-tv"></i></span>
                            <span className="navbar-redirect-name">TV</span>
                        </NavLink>
                    </NavDiv>
                </div>
                <div className="give-back-drop"></div>
            </MainDiv>
        </>
    );
};


export default Navbar;