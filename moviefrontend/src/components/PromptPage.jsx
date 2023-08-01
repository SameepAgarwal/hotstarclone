import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import { userContext } from "../App";

import Footer from "./Footer";
// import Content from "./Content";
import styled from 'styled-components';
import InLineMovies from "./InLineMovies";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar{
        display: none;
    }
    .go-back-btn{
        padding: 16px 10px;
        /* margin: 10px; */
        z-index: 1;
        color: black;
        border: none;
        position: absolute;
        top: 10px;
        border-radius: 100%;
        background-color: #848181;
        cursor: pointer;
    }

    .watch-now-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .big-content-img{
            width: 100%;
        }
        .img-show{
            position: relative;
            width: 100%;
            img{
                width: -webkit-fill-available;
                /* width: 100%; */
            }
        }
        .details-know-button{
            margin: 10px;
            padding: 3px 10px;
            width: fit-content;
        }
        .big-video-player-div{
            margin: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            h3{
                color: #fff;
                font-size: 25px;
            }
            .big-video-player{
                border: 2px solid white;
                padding: 10px;
                height: 500px;
                width: 900px;
            }
        }
        .player-functions{
            display: none;
            height: 100px;
            width: 100%;
            .play-btn{
                background-color: #000;
                color: #fff;
                padding: 5px;
                border: none;
            }
            .pause-btn{
                background-color: #000;
                color: #fff;
                padding: 5px;
                border: none;
            }
        }
        .yt-videos-show{
            display: flex;
            overflow: scroll;
            flex-wrap: nowrap;

            width: 100%;
            &::-webkit-scrollbar{
                display: none;
            }

            .video-grid{
                min-width: 400px;
                height: 300px;
                margin: 10px;
            }

        }
    }

    @media (min-width: 600px) and (max-width:1200px) {
        .watch-now-page{
            .big-video-player-div{
                margin: 13px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                h3{
                    color: #fff;
                    font-size: 25px;
                    margin: 10px;
                }
                .big-video-player{
                    border: 2px solid white;
                    padding: 0px;
                    margin: 0px;
                    width: 90%;
                    height: 500px;
                }
            }
            .yt-videos-show{
                display: flex;
                overflow: scroll;
                flex-wrap: nowrap;
                
                padding: 5px;
                
                width: 100%;
                &::-webkit-scrollbar{
                    display: none;
                }
                
                .video-grid{
                    /* max-width: 90%; */
                    height: 300px;
                    margin: 10px;
                }
                
            }
        }
    }
    @media screen and (max-width:600px) {
        .watch-now-page{
            .big-video-player-div{
                margin: 13px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                h3{
                    color: #fff;
                    font-size: 25px;
                    margin: 10px;
                }
                .big-video-player{
                    border: 2px solid white;
                    padding: 0px;
                    margin: 0px;
                    width: 100%;
                    height: 300px;
                }
            }
            .yt-videos-show{
                display: flex;
                overflow: scroll;
                flex-wrap: nowrap;
                
                padding: 5px;
                width: 100%;
                &::-webkit-scrollbar{
                    display: unset;
                }
                
                .video-grid{
                    height: 200px;
                    min-width: 200px;
                    /* margin: 10px; */
                }
                
            }
        }
    }
`;

const ImgDetails = styled.div`
    /* max-width: 500px; */
    background: linear-gradient(#3430304d 60%, #a2929233);
    border-radius: 10px;
    padding: 10px;
    height: fit-content;
    margin: 2px;

    /* @media (min-width: 800px) and (max-width: 1000px) {
        position: absolute;
        bottom: 30px;
        left: 60px;
    } */
    /* @media screen and (max-width: 1000px){
        padding: 0;
        border-radius: 0px;
        margin: auto;
        max-width: 100%;
        width: 100%;
        background: unset;
        background-color: transparent; 
        position: relative;
        left: 0;
    } */

    .onhover-details-show{
        display: flex;
        flex-direction: column;
        color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 100%;
        height: fit-content;
        /* min-height: 100px; */
        .movie-name{
            font-size: 40px;
            padding: 10px;
            width: 100%;
        }
        
        .movie-details-div{
            font-size: 15px;
            font-weight: bold;
            width: 100%;
            padding: 6px 0px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            span{
                padding: 7px;
            }
            .fa-circle{
                color: linear-gradient(#1514147a, white);
                position: relative;
                top: 1px;
                font-size: 5px;
            }
        }
        .movie-in-short{
            color: whitesmoke;
            font-size: 14px;
            margin: 2px;
            padding: 5px;
        }
        .movie-watch-btn-div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 10px;
            .watch-movie-btn{
                width: 100%;
                font-size: 15px;
                padding: 15px;
                margin: 2px;
                font-weight: bold;
                border: none;
                background-color: #4e4a4a7a;
                color: white;
                border-radius: 5px;
            }
            .add-to-wishlist-btn{
                padding: 15px;
                font-size: 15px;
                margin: 4px;
                border: none;
                background-color: #4e4a4a7a;
                color: white;
                border-radius: 3px;
            }
            .fa-plus{
                font-size: 15px;
            }
        }
        // in on hover
        /* @media (min-width: 800px) and (max-width: 1000px) {
            .movie-name{
            }
            .movie-details-div{
                font-size: 12px;
                font-weight: bold;
                width: 100%;
                padding: 3px 0px;
                span{
                    padding: 4px;
                }
                .fa-circle{
                    color: linear-gradient(#1514147a, white);
                    position: relative;
                    top: 1px;
                    font-size: 3px;
                }
            }
            .movie-watch-btn-div{
                padding: 5px;
                .watch-movie-btn{
                    width: 100%;
                    font-size: 14px;
                    padding: 6px;
                    margin: 2px;
                    border-radius: 5px;
                }
                .add-to-wishlist-btn{
                    padding: 7px;
                    font-size: 8px;
                    margin: 4px;
                    border: none;
                    background-color: #4e4a4a7a;
                    color: white;
                    border-radius: 3px;
                }
                .fa-plus{
                    font-size: 15px;
                }
            }
            .movie-in-short{
                color: whitesmoke;
                font-size: 8px;
                margin: 2px;
                padding: 5px;
                max-width: 100%;
                min-height: 40px;
                overflow-y: scroll;
                &::-webkit-scrollbar{
                    display: none;
                }
            }
        }
        @media screen and (max-width: 800px){
            margin: 0px;
            padding: 0px;
            min-width: 100%;
            border-radius: 0px;
            display: flex;
            justify-content: center;
            align-items: center;

            .movie-name{
                display: none;
                font-size: 40px;
                padding: 0px;
                min-width: 100%;
                text-align: center;
            }
            .movie-details-div{
                font-size: 16px;
                font-weight: 500;
                width: 100%;
                align-items: center;
                justify-content: center;
                span{
                    display: block;
                    padding: 0px 7px;
                }
                .fa-circle{
                    color: linear-gradient(#1514147a, white);
                    position: relative;
                    top: 1.5px;
                    font-size: 5px;
                    padding: 0px 6px;
                }
            }

            .movie-in-short{
                display: none;
                max-width: 100%;
                overflow-y: scroll;
                &::-webkit-scrollbar{
                    display: none;
                }
            }
            .movie-watch-btn-div{
                padding: 5px;
                justify-content: center;
                .watch-movie-btn{
                    width: 50%;
                    font-size: 18px;
                    padding: 10px;
                    margin: 3px;
                    border-radius: 5px;
                    background-color: #686464;
                }
                .add-to-wishlist-btn{
                    padding: 10px 15px;
                    font-size: 17px;
                    margin: 4px;
                    border: none;
                    background-color: #686464;
                    color: white;
                    border-radius: 3px;
                }
                .fa-plus{
                    font-size: 15px;
                }
            }
        }*/
    }
        @media screen  and (max-width: 500px){
            margin: 0;
            padding: 0;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            .onhover-details-show{
                align-items: center;
                justify-content: center;
                .movie-name{
                    padding: 0px 2px;
                }

                .movie-details-div{
                    font-size: 10px;
                    font-weight: bold;
                    width: 100%;
                    padding: 6px 0px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        padding: 7px;
                    }
                    .fa-circle{
                        color: linear-gradient(#1514147a, white);
                        position: relative;
                        top: 1px;
                        font-size: 5px;
                    }
                }
                .movie-in-short{
                    margin: 10px;
                    padding: 0;
                    font-size: 11px;
                }
                .movie-watch-btn-div{
                    padding: 0px;
                    .watch-movie-btn{
                        font-size: 14px;
                        padding: 10px 7px;
                        margin: 2px;
                    }
                    .add-to-wishlist-btn{
                        padding: 10px 15px;
                        font-size: 14px;
                        margin: 3px;
                    }
                }
            }
        } 
`;


const PromptPage = () => {
    const { state } = useContext(userContext);
    const [ytmoviesList, setYTMoviesList] = useState([]);
    const [playThisVideo, setPlayThisVideo] = useState('');
    const playerRef = useRef();
    const navigate = useNavigate();
    const fetchMovies = async (id_num) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
                }
            };
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id_num}/videos`, options);
            const data = await res.json();
            console.log(data);
            if (res.status !== 200) {
                throw new Error(data);
            }
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].type === "Trailer") {
                    setPlayThisVideo(data.results[i]);
                    console.log(data.results[i]);
                    break;
                }
            }
            setYTMoviesList(data.results);
        } catch (err) {
            console.error(err);
        }
    };
    const changeState = (e) => {
        console.log(playerRef);
        console.log(e.target.className);
        if (e.target.className === 'play-btn') {
            playerRef.current.props.onPlay(true);
        }
        else {
            playerRef.current.props.onPlay();
        }
    };
    useEffect(() => {
        if (state === null) {
            navigate('/');
        }
        if (state.id) fetchMovies(state.id);
    }, [state]);
    return (
        <>
            <Section >
                <div className="watch-now-page">
                    <button className="go-back-btn" onClick={() => {
                        navigate(-1);
                    }}><i className="fa-regular fa-circle-left fa-2xl"></i></button>
                    {
                        state ?
                            <>
                                {/* <h2>{state.release_date}</h2> */}
                                <div className="big-content-img">
                                    {
                                        state ?
                                            <>
                                                <section className="img-show">
                                                    <img src={state.backdrop_path ? `https://image.tmdb.org/t/p/original${state.backdrop_path}` : state.backdropURLs.original} alt={state.original_title} className='big-img' />
                                                    <ImgDetails className='big-img-details'>
                                                        <div className="onhover-details-show">
                                                            <div className='movie-name'>
                                                                {state.original_title || state.name || state.title}
                                                            </div>
                                                            <div className="movie-details-div">
                                                                <span className="movie-details-div-span">{state.release_date || state.first_air_date || state.firstAirYear}</span><i className="fa-solid fa-circle fa-2xs"></i>
                                                                <span className="movie-details-div-span">{state.id}</span>
                                                                <i className="fa-solid fa-circle fa-2xs"></i>
                                                                <span className="movie-details-div-span" style={{ textTransform: 'uppercase' }}>{state.original_language}</span>
                                                                <i className="fa-solid fa-circle fa-2xs"></i>
                                                                <span className="movie-details-div-span">{state.type || "U/A 13+"}</span>
                                                                <i className="fa-solid fa-circle fa-2xs"></i>
                                                                <span className="movie-details-div-span">{state.vote_average}</span>
                                                            </div>
                                                            <p className="movie-in-short">{state.overview}</p>
                                                            <div className="movie-watch-btn-div">
                                                                <button className="watch-movie-btn">WATCH NOW</button>
                                                                <button className="add-to-wishlist-btn"><i className="fa-solid fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </ImgDetails>
                                                </section>
                                            </>
                                            :
                                            null}
                                </div>
                                <button className="details-know-button" onClick={() => {
                                    alert('Watch Details in Console');
                                    console.log(state);
                                    console.log(ytmoviesList);
                                }}>Click Me!</button>
                                {
                                    playThisVideo ?
                                        <>
                                            <div className="big-video-player-div">
                                                <h3>Trailer:</h3>
                                                <div className='big-video-player'>
                                                    <ReactPlayer ref={playerRef} url={`https://www.youtube.com/watch?v=${playThisVideo.key}`} controls={true} playing={true} width='100%' height='100%' />
                                                </div>
                                                {/* <div className="player-functions">
                                                    <button className="play-btn" onClick={changeState}><i className="fa-regular fa-circle-play fa-xl"></i></button>
                                                    <button className="pause-btn" onClick={changeState}><i class="fa-regular fa-circle-pause fa-xl"></i></button>
                                                </div> */}
                                            </div>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ytmoviesList ?
                                        <div className="yt-videos-show">
                                            {ytmoviesList.map((curEle, index) => {
                                                if (curEle !== playThisVideo)
                                                    return (
                                                        <div className='video-grid'>
                                                            <ReactPlayer url={`https://www.youtube.com/watch?v=${curEle.key}`} controls={true} height='100%' width='100%'
                                                            />
                                                        </div>
                                                    );
                                                else return null;
                                            })
                                            }
                                        </div> : null
                                }
                                {state ?
                                    <InLineMovies
                                        url={`https://api.themoviedb.org/3/movie/${state.id}/similar`}
                                        typeOfMovie={'Similar'}
                                        showtype='movie/tv'
                                        key={state.id}
                                    />
                                    :
                                    null
                                }
                            </>
                            :
                            null
                    }
                </div>

                <Footer />
            </Section>
        </>
    );
};

export default PromptPage;