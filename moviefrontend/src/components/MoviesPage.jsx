import React from "react";
import Footer from "./Footer";
import MovieLine from "./MovieLine";
import styled from 'styled-components';
// import MovieCard from "./MovieCard";
import Content from "./Content";

const Section = styled.section`
    &::-webkit-scrollbar{
        display: none;
    }
    /* .searchResult{
        padding: 30px 60px;
        .movie-card{
            max-height:  330px;
            min-height: 290px;

            &:hover{
                z-index: 2;
                position: relative;
            top: 20px;
            }
        }

    } */
`;


/*
top_rated
now_playing
upcoming
popular

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/
// const listOfTypes = {
//     "1": "Biography",
//     "2": "Film Noir",
//     "3": "Game Show",
//     "4": "Musical",
//     "5": "Sport",
//     "6": "Short",
//     "7": "Adult",
//     "12": "Adventure",
//     "14": "Fantasy",
//     "16": "Animation",
//     "18": "Drama",
//     "27": "Horror",
//     "28": "Action",
//     "35": "Comedy",
//     "36": "History",
//     "37": "Western",
//     "53": "Thriller",
//     "80": "Crime",
//     "99": "Documentary",
//     "878": "Science Fiction",
//     "9648": "Mystery",
//     "10402": "Music",
//     "10749": "Romance",
//     "10751": "Family",
//     "10752": "War",
//     "10763": "News",
//     "10764": "Reality",
//     "10767": "Talk Show"
// };
/**
 * 
 * 
 * 
 * 
 * 
 *  IN TMDB
 * {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
 */
/*
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
 */
const MoviesPage = () => {
    const listOfMoviesTypesIndex = [28, 12, 16, 35, 27, 80, 7, 10751, 878];
    // const listOfMoviesTypesIndex = [7, 12, 14, 18, 27, 28, 35, 10749, 10751];
    return (
        <>
            <Section style={{
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
            }}>
                <div className="searchResult" style={{
                    width: "100%",
                }}>
                    <Content
                        url={`https://api.themoviedb.org/3/discover/movie?with_genres=28`}
                    />
                    {
                        listOfMoviesTypesIndex.map((curEle, index) => {
                            return <MovieLine
                                // url={`https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=${curEle}&show_original_language=en`}
                                url={`https://api.themoviedb.org/3/discover/movie?with_genres=${curEle}`}
                                typeOfMovie={curEle}
                                showtype='movie'
                                key={index}
                            />;
                        })
                    }
                </div>
                <Footer />
            </Section>
        </>
    );
};

export default MoviesPage;
