import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({ key: "" });
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU3OTAzMWE4MWY0YzQ0YjY4NzE0NTU0YTU2OWViZCIsIm5iZiI6MTcyNTE5NTYyNS4wNzY2MjUsInN1YiI6IjY2MmIzNTkxMzIzZWJhMDExZTNlZjdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNFYmfxBw9-HohXH186SG80Oo2bZ7tnkFN23BEMgqRc",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt=""
        className="back_icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="100%"
        height="100%"
        title="Trailer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
