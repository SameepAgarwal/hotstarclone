import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { userContext } from "../App";

// background: url("https://pbs.twimg.com/media/FfX61s8XEBI7e4m.jpg:large") no-repeat center center/cover;

const MovieDiv = styled.div`
        margin: 3px;
        min-width: 200px;
        max-width: 200px;
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .movie-card-div{
            border-radius: 10px;
            height: -webkit-fill-available;
            width: 100%;
        }
        .movie-card-div img{
            border-radius: 10px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .onhover-details-show {
            display: none;
        }
        &:hover{
            z-index: 2;
            animation-name: openthismovie;
            animation-duration: 1.3s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 10px;
            height: fit-content;
            .movie-card-div{
                display: none;
            }
            .onhover-details-show{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                color: white;
                background-color: #2e2e2e;
                border-radius: 10px;
                width: 100%;
                height: 100%;
                /* max-height: 200px; */
                .onhover-movie-photo{
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    object-fit: cover;
                    width: 100%;
                    img{
                        border-top-right-radius: 10px;
                        border-top-left-radius: 10px;
                        min-height: 100px;
                        max-height: 100px;
                        width: 100%;
                    }
                }
                .movie-watch-btn-div{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    text-transform: capitalize;
                    justify-content: space-around;
                    width: 100%;
                    padding: 3px;
                    margin: 2px;
                    .watch-movie-btn{
                        width: 100%;
                        font-size: 10px;
                        padding: 6px 10px;
                        margin: 2px;
                        font-weight: bold;
                    }
                    .add-to-wishlist-btn{
                        padding: 4px 10px;
                        font-size: 10px;
                        margin: 2px;
                    }
                    .fa-plus{
                        font-size: 15px;
                    }
                    
                }
                .movie-name-div{
                    padding: 0px 10px;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    text-transform: uppercase;
                    font-family: 'FontAwesome';
                    text-shadow: 0px 4px 0px black;
                    font-size: 10px;
                    word-spacing: 5px;
                    width: inherit;
                    .movie-name-span{   
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .movie-details-div{
                    font-size: 8px;
                    font-weight: bold;
                    width: 100%;
                    padding: 3px 0px;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    span{
                        text-transform: capitalize;
                    }
                    .fa-circle{
                        position: relative;
                        top: 1px;
                        font-size: 3px;
                    }
                }
                .movie-in-short{
                    color: whitesmoke;
                    font-size: 9px;
                    margin: 2px;
                    padding: 5px;
                    max-height: 50px;
                    text-transform: capitalize;
                    overflow: scroll;
                }
                .movie-in-short::-webkit-scrollbar{
                    display: none;
                }
            }
        }
        @keyframes openthismovie {
            from{
                transform: scaleX(1.25) scaleY(1.45);
            }
            to{
                transform: scaleX(1.49) scaleY(1.6);
            }
        }

    @media screen  and (max-width: 500px){
        min-width: 120px;
        max-width: 120px;
        &:hover{

            .onhover-details-show{
                max-height: 200px;
                .onhover-movie-photo{
                    img{
                        min-height: 60px;
                        max-height: 60px;
                    }
                }
                .movie-watch-btn-div{
                    margin: 0px 1px;
                    padding: 0px 1px;
                    .watch-movie-btn{
                        width: 100%;
                        font-size: 10px;
                        padding: 1px 5px;
                        margin: 0px 2px;
                    }
                    .add-to-wishlist-btn{
                        padding: 1.8px 5px;
                        font-size: 6px;
                        margin: 0px 2px;
                    }
                    .fa-plus{
                        font-size: 10px;
                    }
                }
                .movie-name-div{
                    padding: 3px 5px 1px 5px;
                    font-size: 8px;
                    .movie-name-span{   
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        letter-spacing: 1px;
                    }
                }
                .movie-details-div{
                    font-size: 7px;
                    padding: 2px 0px 0px 0px;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    span{
                        text-transform: capitalize;
                    }
                    .fa-circle{
                        position: relative;
                        top: 0px;
                        font-size: 2px;
                    }
                }
                .movie-in-short{
                    color: whitesmoke;
                    font-size: 7px;
                    margin: 2px 2px;
                    padding: 0px 2px;
                    max-height: 37px;
                    text-transform: capitalize;
                    overflow: scroll;
                }
            }
        }
    }
`;

const MovieCard = (props) => {
    const context = useContext(userContext);
    // const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const runTime = (time) => {
        // const hrs = time / 60;
        const hrs = Math.floor(time / 60);
        const mns = (time - (hrs * 60));

        return `${hrs}h ${mns}m`;
    };
    const watchNow = (e) => {
        const wholeDetail = props.fullEle;
        context.dispatch({ type: 'WATCHNOW', payload: wholeDetail });
        navigate('/prompt');
    };
    return (
        <>
            <MovieDiv className="MovieDiv">
                <div className="movie-card-div" >
                    <img src={props.imgurl} alt={props.moviename} />
                </div>
                <div className="onhover-details-show">
                    <div className="onhover-movie-photo">
                        <img src={props.imgurlhover} alt={props.moviename} />
                    </div>
                    <div className="movie-watch-btn-div">
                        <button className="watch-movie-btn" onClick={watchNow}>WATCH NOW</button>
                        <button className="add-to-wishlist-btn"><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="movie-name-div"><div className="movie-details-div-span movie-name-span">{props.moviename}</div></div>
                    <div className="movie-details-div">
                        <span className="movie-details-div-span">{props.year}</span>
                        <i className="fa-solid fa-circle fa-2xs"></i>
                        <span className="movie-details-div-span">{props.runtime ? runTime(props.runtime) : 'NA'}</span>
                        <i className="fa-solid fa-circle fa-2xs"></i>
                        <span className="movie-details-div-span">{props.originalLanguage || 'NA'}</span>
                        <i className="fa-solid fa-circle fa-2xs"></i>
                        <span className="movie-details-div-span"> {`${props.countries || 'NA'}`}</span>
                        <i className="fa-solid fa-circle fa-2xs"></i>
                        <span className="movie-details-div-span"> {props.type || 'NA'}</span>
                    </div>
                    <p className="movie-in-short">{props.caption}</p>
                </div>
            </MovieDiv>
        </>
    );
};


export default MovieCard;
