import React from "react";
import Content from "./Content";
// import MovieLine from "./MovieLine";
import Footer from "./Footer";
import InLineMovies from './InLineMovies';


// const TypeOfMovies = ["Action", "Adult", "Adventure", "Animation", "Biography",
//     "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy",];

/**
 * 
 * 
 * 
 * 
 * 
 * const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU4MDcxOGRkZTY5N2Q3NzliMzNmZDZiNjdhYTI0NSIsInN1YiI6IjY0YWNkMDZjOGEwZTliMDBlMzc0ZTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xOpVmQkbwHLnwlR_JWup-ZqwQRZJ4Y1FQiqKXPdDIFk'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


  
 */
const HomePage = () => {
    const Types = ['movie/now_playing', 'movie/popular', 'movie/top_rated', 'movie/upcoming', 'trending/movie/week', 'trending/movie/day'];
    const NicelyWrittenMovies = ['Now Streaming', 'Popular', 'Top Rated', 'Upcoming', 'Trending(This Week)', 'Trending(Today)'];
    const seriesTypes = ['tv/on_the_air', 'tv/popular', 'tv/top_rated', 'tv/airing_today'];
    const NicelyWrittenSeries = ['On Air', 'Popular', 'Top Rated', 'Airing Today'];
    return (
        <>
            <div className='home-page-div' style={{
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden'
            }}>
                <div className="searchResult" style={{
                    width: "100%",
                }}>
                    <Content 
                        url = "https://api.themoviedb.org/3/movie/now_playing"
                    />
                    {
                        Types.map((curEle, index) => {
                            return <InLineMovies
                                url={`https://api.themoviedb.org/3/${curEle}`}
                                typeOfMovie={NicelyWrittenMovies[index]}
                                showtype='Movie'
                                key={index*2}
                            />;
                        })
                    }
                    {
                        seriesTypes.map((curEle, index) => {
                            return <InLineMovies
                                url={`https://api.themoviedb.org/3/${curEle}`}
                                typeOfMovie={NicelyWrittenSeries[index]}
                                showtype='Series'
                                key={index}
                            />;
                        })
                    }
                </div>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;