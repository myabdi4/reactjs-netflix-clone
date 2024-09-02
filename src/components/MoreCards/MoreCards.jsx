import React from "react";
import "./MoreCards.css";
import TitleCards from "../TitleCards/TitleCards";

const MoreCards = () => {
  return (
    <div className="morecards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
      <TitleCards title={"Only on Netflix"} category={"popular"} />
      <TitleCards title={"Upcoming"} category={"upcoming"} />
      <TitleCards title={"Top picks for You"} category={"popular"} />
    </div>
  );
};

export default MoreCards;
