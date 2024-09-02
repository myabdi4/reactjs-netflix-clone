import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { fetchNowPlayingMovies } from "../../api/tmdbApi";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  // AUTO SCROLL USING WHEEL ON MOUSE
  const cardsRef = useRef();

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchNowPlayingMovies({ category });
      setApiData(movies);
    };

    loadMovies();

    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
