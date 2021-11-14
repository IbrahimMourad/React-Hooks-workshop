import React from "react";

const MovieCard = ({ desc, name, img }) => {
  return (
    <>
      <h6>{name}</h6>
      <div>
        <img src={img} alt="movie poster" />
      </div>
      <p>{desc}</p>
    </>
  );
};

export default MovieCard;
