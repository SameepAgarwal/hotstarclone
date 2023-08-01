import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
// import MovivDB from '../Moviesdbyme';
import styled from "styled-components";

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
        top: 10px;
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

const InLineMovies = (props) => {
    const [movieList, setMovieList] = useState([]);
    const searchMovies = async (url) => {
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

    useEffect(() => {
        searchMovies(props.url);
    }, []);
    return (
        <>
            <MovieL className='div-straight-'>
                <h3>{props.typeOfMovie}</h3>
                <Section className='div-straight-line' style={{ width: "100%", overflow: "hidden" }}>
                    <div className="movie-card-moviesPage">
                        {movieList ?
                            movieList.map((curEle, index) => {
                                return (
                                    <div className="movie-card">
                                        <MovieCard
                                            imgurl={`https://image.tmdb.org/t/p/original${curEle.poster_path}`}
                                            imgurlhover={`https://image.tmdb.org/t/p/original${curEle.backdrop_path}`}
                                            moviename={curEle.original_title}
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
                            }) : null
                        }
                    </div>
                </Section>
                <p className="view-all" style={{ textDecoration: 'underline' }}>view all</p>
            </MovieL>
        </>
    );
};

export default InLineMovies;


/**
 * 
 *   {
      "backdrop_path": "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
      "first_air_date": "2023-01-23",
      "genre_ids": [
        9648,
        18
      ],
      "id": 202250,
      "name": "Dirty Linen",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Dirty Linen",
      "overview": "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
      "popularity": 2797.914,
      "poster_path": "/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
      "vote_average": 5,
      "vote_count": 13
    }
 * 

    {
      "adult": false,
      "backdrop_path": "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 640146,
      "original_language": "en",
      "original_title": "Ant-Man and the Wasp: Quantumania",
      "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      "popularity": 8567.865,
      "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      "release_date": "2023-02-15",
      "title": "Ant-Man and the Wasp: Quantumania",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1886
    }
 * 
 * 
 * 
 */