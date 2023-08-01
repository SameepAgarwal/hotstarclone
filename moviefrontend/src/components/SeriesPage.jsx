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
`;



/**
 * 
 * {
  "genres": [
    {
      "id": 10759,
      "name": "Action & Adventure"
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
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
} 
 * 
 * 
 * 
 * 
 */
const SeriesPage = () => {
    const listOfMoviesTypesIndex = [10759, 10762, 16, 35, 18, 80, 37, 10751, 10768];
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
                    <Content />
                    {
                        listOfMoviesTypesIndex.map((curEle, index) => {
                            return <MovieLine
                                // url={`https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=series&genre=${curEle}&show_original_language=en`}
                                url = {`https://api.themoviedb.org/3/discover/tv?with_genres=${curEle}`}
                                typeOfMovie={curEle}
                                showtype='series'
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


export default SeriesPage;