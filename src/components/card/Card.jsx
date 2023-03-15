import React from "react";
import "./Card.style.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card__text">
        <p className="card__text--id">{pokemon.id}</p>
        <p className="card__text--name">{pokemon.name}</p>
      </div>
      <img className="card--img" src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default Card;
