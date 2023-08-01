import React from "react";
import Footer from "./Footer";
// import MovieLine from "./MovieLine";
// import MovieCard from "./MovieCard";
import Content from "./Content";
import styled from 'styled-components';
import InLineMovies from './InLineMovies';

const Section = styled.section`
    &::-webkit-scrollbar{
        display: none;
    }
`;
const TvPage = () => {
    const seriesTypes = ['trending/tv/day', 'trending/tv/week', 'tv/on_the_air', 'tv/popular', 'tv/top_rated', 'tv/airing_today'];
    const NicelyWrittenSeries = ['Trending(Today)', 'Trending(This Week)', 'On Air', 'Popular', 'Top Rated', 'Airing Today'];
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
                        url="https://api.themoviedb.org/3/tv/on_the_air"
                    />
                    {
                        seriesTypes.map((curEle, index) => {
                            return <InLineMovies
                                url={`https://api.themoviedb.org/3/${curEle}`}
                                typeOfMovie={NicelyWrittenSeries[index]}
                                showtype='movie/tv'
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

export default TvPage;