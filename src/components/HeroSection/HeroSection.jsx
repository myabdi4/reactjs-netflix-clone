import React, { useState, useEffect } from "react";
import { fetchNowPlayingMovies } from "../../api/tmdbApi"; // Import the API function
import "./HeroSection.css";
import { Link } from "react-router-dom";

// IMAGES AND ICONS
import video_loading from "../../assets/video-placeholder.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../TitleCards/TitleCards";

const HeroSection = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  // SEARCH THE API FOR A RANDOM MOVIE USING USEEFFECT
  useEffect(() => {
    const getRandomMovie = async () => {
      const categories = ["now_playing", "top_rated", "upcoming", "popular"];
      const movies = await fetchNowPlayingMovies(categories);
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setRandomMovie(movies[randomIndex]);
      }
    };

    getRandomMovie();
  }, []);

  return (
    <div className="heroSection">
      {randomMovie ? (
        <img
          src={`https://image.tmdb.org/t/p/w500` + randomMovie.backdrop_path}
          alt=""
          className="banner-img"
        />
      ) : (
        <img src={video_loading} alt="" className="banner-img" />
      )}
      <div className="hero-caption">
        {randomMovie ? (
          <h3>
            {randomMovie.original_title.length > 30
              ? randomMovie.original_title.substring(0, 30) + "..."
              : randomMovie.original_title}
          </h3>
        ) : (
          <h3>
            <p>loading...</p>
          </h3>
        )}
        {randomMovie ? (
          <p>
            {randomMovie.overview.length > 100
              ? randomMovie.overview.substring(0, 100) + "..."
              : randomMovie.overview}
          </p>
        ) : (
          <h3>
            <p>loading...</p>
          </h3>
        )}
        <div className="hero-btns">
          {randomMovie && (
            <Link to={`/player/${randomMovie.id}`} className="btns">
              <img src={play_icon} alt="" /> Play
            </Link>
          )}
          <button className="btns dark-btn">
            <img src={info_icon} alt="" /> More Info
          </button>
        </div>
        <TitleCards />
      </div>
    </div>
  );
};

export default HeroSection;
