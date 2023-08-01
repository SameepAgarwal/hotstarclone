import React, { useEffect, useState } from "react";
import Footer from "./Footer";
// import MovieLine from "./MovieLine";
import styled from 'styled-components';
import MovieCard from "./MovieCard";

const Search = styled.div`
    margin: 7px auto 0px auto;
    width: 80%;
    padding: 10px;
    background-color: #2e2e2e; 
    border-radius: 10px;
    display: flex;
    flex-direction: 'row';
    justify-content: space-around;
    align-items: center;
    .fa-magnifying-glass{
        color: white;
        padding: 10px 20px;
        cursor: pointer;
    }
    input{
        width: 100%;
        background-color: transparent;
        font-size: 15px;
        padding: 10px;
        height: 50px;
        color: white;
        border: none;
        &::placeholder{
            font-size: 15px;
            font-weight: 200;
        }
        &:focus{
            outline: none;
        }
        &::cross{
            background-color: white;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 0px;
        margin: 10px auto 0px auto;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    width: 100%;
    &::-webkit-scrollbar{
        display: none;
    }
    .search-place-heading{
        display: block;
        color: white;
        width: 90%;
        padding-left: 20px;
        margin-top: 30px;
    }
    .searchResult{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,190px);
        justify-content: center;
        align-items: center;
        gap: 40px 20px;
        padding: 0px 35px;
        .movie-card{
            /* max-height:  330px;
            min-height: 290px; */
            min-height: 305px;
            &:hover{
                z-index: 2;
            }
        }
    }
    .popular-movies-div{
        margin: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .popularMovies{
        width: 100%;
        justify-content: center;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 190px);
        gap: 40px 20px;
        padding: 0px 35px;
        .movie-card{
            min-height: 305px;
            &:hover{
                z-index: 2;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .searchResult{
            grid-template-columns: repeat(auto-fit,120px);
            gap: 30px 10px;
            padding: 0px 10px;
        }
        .popularMovies{
            width: 100%;
            justify-content: center;
            display: grid;
            grid-template-columns: repeat(auto-fit, 120px);
            gap: 30px 10px;
            padding: 0px 10px;
            .movie-card{
                min-height: 190px;
            }
        }
    }
`;

const SearchPage = () => {
    const [searchMoviesList, setSearchMoviesList] = useState([]);
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [isFetched, setIsFetched] = useState(true);
    const [isSearched, setIsSearched] = useState(false);
    const [movieBeingSearch, setMovieBeingSearch] = useState();

    const searchMovie = async () => {
        const movieName = movieBeingSearch;
        setIsFetched(false);
        setMovieBeingSearch(movieName);
        setIsSearched(true);
        // const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movieName}?exact=false&titleType=movie`;
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '6ce7d85143msh401083ce8532ff4p160d3djsnd4363f475f1b',
        //         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        //     }
        // };
        // setMovieBeingSearch(movieName);
        const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${movieName}&country=in&show_type=movie&output_language=en`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6ce7d85143msh401083ce8532ff4p160d3djsnd4363f475f1b',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const resultant = await response.json();
            setSearchMoviesList(resultant.result);
        } catch (error) {
            console.error(error);
        }
        setIsFetched(true);
        setMovieBeingSearch(movieName);
    };

    const popularMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
            }
        };
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular', options);
            const resultant = await response.json();
            setPopularMoviesList(resultant.results);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        popularMovies();
    }, []);
    return (
        <>
            <Section>
                <Search className="search-movie">
                    <i className="fa-solid fa-magnifying-glass" onClick={searchMovie}></i>
                    <input type="search" placeholder="Search...." value={movieBeingSearch} onChange={(e) => {
                        setMovieBeingSearch(e.target.value);
                    }} />
                </Search>
                {isFetched ?
                    <>
                        {
                            isSearched ? <h2 className="search-heading search-place-heading">Search Results</h2> : null
                        }
                        <div className="searchResult">
                            {
                                searchMoviesList.map((curEle, index) => {
                                    return (
                                        <div className="movie-card">
                                            {
                                                <MovieCard
                                                    fullEle={curEle}
                                                    imgurl={curEle.posterURLs.original}
                                                    imgurlhover={curEle.backdropURLs.original}
                                                    moviename={curEle.title}
                                                    runtime={curEle.runtime}
                                                    originalLanguage={curEle.originalLanguage}
                                                    countries={curEle.countries}
                                                    year={curEle.year}
                                                    type={curEle.type}
                                                    caption={curEle.overview}
                                                    key={index}
                                                />
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </>
                    : <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        color: "white",
                    }}>
                        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
                    </div>
                }
                <h2 className="popular-movie-heading search-place-heading" style={{
                    display: "block",
                    color: 'white',
                    padding: '10px 30px',
                }}>Popular Movies</h2>
                <div className="popular-movies-div">
                    <div className="popularMovies">
                        {
                            popularMoviesList.map((curEle, index) => {
                                return (
                                    <div className="movie-card">
                                        {
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
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                {/* <MovieLine /> */}
                <Footer />
            </Section>
        </>
    );
};

export default SearchPage;
/**
 * 
 * 
 * https://image.tmdb.org/t/p/original
 * {
      "adult": false,
      "backdrop_path": "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 667538,
      "original_language": "en",
      "original_title": "Transformers: Rise of the Beasts",
      "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      "popularity": 11856.991,
      "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      "release_date": "2023-06-06",
      "title": "Transformers: Rise of the Beasts",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 1304
    }
 */