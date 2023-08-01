import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { userContext } from "../App";
const ImgDetails = styled.div`
    position: absolute;
    bottom: 70px;
    left: 100px;
    width: fit-content;
    max-width: 500px;
    background: linear-gradient(#3430304d 60%, #a2929233);
    border-radius: 10px;
    padding: 10px;
    height: fit-content;

    @media (min-width: 800px) and (max-width: 1000px) {
        position: absolute;
        bottom: 30px;
        left: 60px;
    }
    @media screen and (max-width: 800px){
        padding: 0;
        border-radius: 0px;
        margin: auto;
        max-width: 100%;
        width: 100%;
        background: unset;
        background-color: transparent; 
        position: relative;
        bottom: 36px;
        left: 0;
    }

    .onhover-details-show{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-end; */
        /* align-items: center; */
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
        @media (min-width: 800px) and (max-width: 1000px) {
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
            background-color: rgba(53, 51, 51, 0.32);

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
        }

        @media screen  and (max-width: 500px){

            .movie-details-div{
                font-size: 13px;
                span{
                    display: block;
                    padding: 0px;
                }
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
const Section = styled.section`
    display: block;
    height: fit-content;
    .big-content-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .big-content-div-img {
        width: 100%;
    }

    .big-content-img{
        vertical-align: middle;
        min-height: 700px;
        max-height: 800px;
        width: 100%;
        img{
            max-height: 800px;
            min-height: 700px;
            width: 100%;
            object-fit: cover;
        }
    }
    @media (min-width) and (max-width: 1000px) {
        background-color: black;
        .big-content-img{
            vertical-align: middle;
            min-height: 400px;
            max-height: 400px;
            height: 100%;
            width: 100%;
            img{
                max-height: 400px;
                min-height: 400px;
                width: 100%;
                /* object-fit: cover; */
            }
        }
        .big-content-div{
            width: 100%;
        }
    }

    @media (min-width: 500px)  and (max-width: 800px){
        .big-content-img{
            min-height: 400px;
            max-height: 400px;
            height: 100%;
            width: 100%;
            img{
                max-height: 300px;
                min-height: 300px;
            }
        }
        .big-content-div{
            width: 100%;
        }
    }

    @media screen  and (max-width: 500px){

        .big-content-img{
            min-height: 200px;
            max-height: 200px;
            height: 100%;
            width: 100%;
            img{
                max-height: 150px;
                min-height: 150px;
                width: 100%;
                /* height: 100%; */
                /* object-fit: cover; */
            }
        }
        .big-content-div{
            width: 100%;
        }
    }

    .inside-big-img-div::-webkit-scrollbar{
        display: none;
    }

    .inside-big-img-div{
        display: flex;
        align-items: center;
        object-fit: cover;
        overflow-x: hidden;
        width: 450px;
        position: absolute;
        bottom: 30px;
        right: 50px;

        .inside-big-img-small-img-div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            overflow-x: scroll;
            overflow-y: visible;
            width: 470px;
            padding: 20px 10px;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        .inside-big-img{
            margin: 3px;
            border-radius: 10px;
            max-height: 87px;
            img{
                object-fit: cover;
                /* max-height: 80px; */
                height: fit-content;
                max-width: 150px;
                border-radius: 10px;
            }

            &:hover{
                /* align-self: baseline; */
                transform: scale(1.29);
                /* border: 1px solid white; */
            }
        }

        @media (max-width: 1000px) {
            width: 250px;
            .inside-big-img{

                .inside-big-img-small-img-div{
                    width: 250px;
                }
                img{
                    max-height: 50px;
                    max-width: 80px;
                    border-radius: 10px;
                }
            }
        }
        @media screen and (max-width: 800px){
            display: none;
        }
    }
    
`;

// const urlList = [
//     "https://www.koimoi.com/wp-content/new-galleries/2022/10/biggest-blockbuster-biggest-actors-biggest-platform-watch-brahmastra-part-one-shiva-on-november-4-2022-exclusively-on-disney-hotstar-0001.jpg",
//     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4625/1114625-h-422cbbd01404",
//     "https://images.hindustantimes.com/tech/img/2021/07/31/960x540/bhuj-the-pride-of-india_1200x768_1627719597206_1627719602352.jpeg",
//     "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6497/1316497-h-0073cb514439",
//     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6351/1246351-h-ef9f7687166c",
//     "https://www.bollywoodhungama.com/wp-content/uploads/2023/06/IB-71-to-premiere-on-Disney-620.jpg"
// ];


const Content = (props) => {
    // const navigate = useNavigate();
    const [bigImgUrlIndex, setBigImgUrlIndex] = useState(0);
    const [movieList, setMovieList] = useState([]);
    const context = useContext(userContext);
    const navigate = useNavigate();

    const searchMovies = async (url) => {
        // const url = `https://api.themoviedb.org/3/movie/now_playing`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
            }
        };
        //'https://api.themoviedb.org/3/tv/on_the_air'
        try {
            const response = await fetch(url, options);
            const resultant = await response.json();
            setMovieList(resultant.results);
        } catch (error) {
            console.error(error);
        }
    };

    const changeBorder = () => {
        if (movieList.length > 0) {
            const div = document.querySelectorAll('.inside-big-img');
            for (var i = 0; i < 10; i++) {
                if (i !== bigImgUrlIndex) {
                    div[i].style.border = 'none';
                }
                else {
                    div[i].style.border = '1px solid white';
                }
            }
        }
    };

    const changeBigImg = (event) => {
        const name = event.target.name - '0';
        setBigImgUrlIndex(name);
    };

    const MoveImg = (event) => {
        const id = event.target.id;
        if (id === "moveLeftBigImg") {
            setBigImgUrlIndex((oldIndex) => {
                if (oldIndex === 0) {
                    return 9;
                }
                else return oldIndex - 1;
            });
        }
        else if (id === "moveRightBigImg") {
            setBigImgUrlIndex((oldIndex) => {
                if (oldIndex === 9) {
                    return 0;
                }
                else return oldIndex + 1;
            });
        }
        else if (id === "moveRightSmallImg") {
            setBigImgUrlIndex((oldIndex) => {
                if (oldIndex === 9) {
                    return 0;
                }
                else return oldIndex + 1;
            });
        }
        else {
            setBigImgUrlIndex((oldIndex) => {
                if (oldIndex === 0) {
                    return 9;
                }
                else return oldIndex - 1;
            });
        }
        console.log(bigImgUrlIndex);
    };

    const watchNow = (e) => {
        const wholeDetail = movieList[bigImgUrlIndex];
        context.dispatch({ type: 'WATCHNOW', payload: wholeDetail });
        navigate('/prompt');
    };
    useEffect(() => {
        searchMovies(props.url);
    }, []);

    useEffect(() => {
        changeBorder();
    }, [bigImgUrlIndex]);
    return (
        <Section className='hii'>
            <div className="big-content-div">
                <button className='prev-btn-big-img' type='button' name='moveLeftBigImg' onClick={MoveImg} >
                    <i id='moveLeftBigImg' className="fa-solid fa-circle-chevron-left fa-2xl"></i>
                </button>
                <div className="big-content-img">
                    {
                        movieList.length > 0 ?
                            <>
                                <img src={`https://image.tmdb.org/t/p/original${movieList[bigImgUrlIndex].backdrop_path}`} alt={movieList[bigImgUrlIndex].original_title} className='big-img' />
                                <ImgDetails className='big-img-details'>
                                    <div className="onhover-details-show">
                                        <div className='movie-name'>{movieList[bigImgUrlIndex].original_title}</div>
                                        <div className="movie-details-div">
                                            <span className="movie-details-div-span">{movieList[bigImgUrlIndex].release_date}</span>
                                            <i className="fa-solid fa-circle fa-2xs"></i>
                                            <span className="movie-details-div-span">{movieList[bigImgUrlIndex].runtime}</span>
                                            <i className="fa-solid fa-circle fa-2xs"></i>
                                            <span className="movie-details-div-span">{movieList[bigImgUrlIndex].original_language}</span>
                                            <i className="fa-solid fa-circle fa-2xs"></i>
                                            <span className="movie-details-div-span"> U/A 13+</span>
                                            <i className="fa-solid fa-circle fa-2xs"></i>
                                            <span className="movie-details-div-span">{movieList[bigImgUrlIndex].vote_average}</span>
                                        </div>
                                        <p className="movie-in-short">{movieList[bigImgUrlIndex].overview}</p>
                                        <div className="movie-watch-btn-div">
                                            <button className="watch-movie-btn" onClick={watchNow} >WATCH NOW</button>
                                            <button className="add-to-wishlist-btn"><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>
                                </ImgDetails>
                            </>
                            :
                            null}
                </div>
                <button className='next-btn-big-img' name='moveRightBigImg' onClick={MoveImg}>
                    <i id='moveRightBigImg' className="fa-solid fa-circle-chevron-right fa-2xl"></i>
                </button>
                <div className="inside-big-img-div">
                    <div className='inside-big-img-small-img-div'>
                        {
                            movieList.map((curEle, index) => {
                                if (index < 10)
                                    return (
                                        <div className="inside-big-img"
                                            id={index}
                                            onClick={(e) => {
                                                changeBigImg(e);
                                            }}
                                            onMouseEnter={(e) => {
                                                if (e.target.name !== bigImgUrlIndex) {
                                                    e.target.style.border = '1px solid white';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (e.target.name !== bigImgUrlIndex) {
                                                    e.target.style.border = 'none';
                                                }
                                            }}>
                                            <img name={index} src={`https://image.tmdb.org/t/p/original${curEle.backdrop_path}`} alt={curEle.original_title} />
                                        </div>
                                    );
                                else return null;
                            })
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Content;

