import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// import MovivDB from '../Moviesdbyme';
import styled from "styled-components";


const listOfTypes = {
    "1": "Biography",
    "2": "Film Noir",
    "3": "Game Show",
    "4": "Musical",
    "5": "Sport",
    "6": "Short",
    "7": "Adult",
    "12": "Adventure",
    "14": "Fantasy",
    "16": "Animation",
    "18": "Drama",
    "27": "Horror",
    "28": "Action",
    "35": "Comedy",
    "36": "History",
    "37": "Western",
    "53": "Thriller",
    "80": "Crime",
    "99": "Documentary",
    "878": "Science Fiction",
    "9648": "Mystery",
    "10402": "Music",
    "10749": "Romance",
    "10751": "Family",
    "10752": "War",
    "10763": "News",
    "10764": "Reality",
    "10767": "Talk Show"
};

const MovieL = styled.div`
    width: 100%;
    position: relative;
    max-width: -webkit-fill-available;
    overflow: hidden;
    .div-straight-line {
        display: flex;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
        padding: 30px 0px;
    }
    .div-straight-line::-webkit-scrollbar {
        display: none;
    }
    h3{
        color: white;
        position: absolute;
        top: 6px;
        left: 30px;
    }
    .view-all{
        position: absolute;
        top: 6px;
        right: 30px;
        color: white;
    }

    @media screen and (max-width: 500px) {
        .div-straight-line {
            padding: 20px 0px 0px 0px;
        }
        h3{
            left: 10px;
        }
        .view-all{
            position: absolute;
            top: 12px;
            right: 10px;
            color: white;
        }
    }
`;

const Section = styled.div`
    .movie-card-moviesPage{
        padding: 24px 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        .movie-card{
            display: flex;
            align-items: center;
            &:hover{
                z-index: 2;
                min-height: 310px;
            }
        }
    }
    @media screen and (max-width: 500px) {
        .movie-card-moviesPage{
            padding: 24px 30px;
            .movie-card{
                &:hover{
                    min-height: 190px;
                }
            }
        }
    }
`;

const MovieLine = (props) => {
    const [movieList, setMovieList] = useState([]);
    const searchMovies = async (url) => {
        // const url = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=${showType}&genre=${typeOfMovie}&show_original_language=en`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
            }
        };
        try {
            const response = await fetch(url, options);
            const resultant = await response.json();
            setMovieList(resultant.results);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        searchMovies(props.url);
    }, []);
    return (
        <>
            <MovieL className='div-of-straight-line'>
                <h3>{listOfTypes[props.typeOfMovie]}</h3>
                <Section className='div-straight-line' style={{ width: "100%", overflow: "hidden" }}>
                    <div className="movie-card-moviesPage">
                        {
                            movieList.map((curEle, index) => {
                                return (
                                    <div className="movie-card">
                                        <MovieCard
                                            imgurl={`https://image.tmdb.org/t/p/original${curEle.poster_path}`}
                                            imgurlhover={`https://image.tmdb.org/t/p/original${curEle.backdrop_path}`}
                                            moviename={curEle.original_name}
                                            runtime={curEle.runtime}
                                            originalLanguage={curEle.original_language}
                                            countries={curEle.release_date}
                                            year={curEle.vote_average}
                                            type='movie'
                                            caption={curEle.overview}
                                            key={index}
                                            fullEle={curEle}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </Section>
                <p className="view-all" style={{ textDecoration: 'underline' }}>view all</p>
            </MovieL>
        </>
    );
};


// var straightLine = document.getElementsByClassName(".div-straight-line");
// console.log(straightLine);


export default MovieLine;
