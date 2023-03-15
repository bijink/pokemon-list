import React, { useContext } from "react";
import { PokemonDetails } from "../../App";
import "./Card.style.css";

const Card = ({ pokemon }) => {
  const { setPokemonDetails } = useContext(PokemonDetails);

  return (
    <div className="card" onClick={() => setPokemonDetails(pokemon)}>
      <div className="card__text">
        <p className="card__text--id">{pokemon.id}</p>
        <p className="card__text--name">{pokemon.name}</p>
      </div>
      <img className="card--img" src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default Card;
