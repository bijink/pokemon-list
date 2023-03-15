import React, { useContext } from "react";
import { PokemonDetails } from "../../App";
import "./Details.style.css";

const Details = () => {
  const { pokemonDetails } = useContext(PokemonDetails);

  return Object.values(pokemonDetails).length ? (
    <div className="details">
      <p className="details--title">{pokemonDetails.name}</p>
      <img
        className="details--img"
        src={pokemonDetails.sprites.other.dream_world.front_default}
        alt={pokemonDetails.name}
      />
      <div className="details__text">
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <br />
        <div className="details__text__abilites">
          <p className="details__text--section-title">Abilities :-</p>
          {pokemonDetails.abilities.map((item, i) => (
            <p key={i}>{item.ability.name}</p>
          ))}
        </div>
        <br />
        <div className="details__text__base-stat">
          <p className="details__text--section-title">Stats :-</p>
          {pokemonDetails.stats.map((item, i) => (
            <p key={i}>
              {item.stat.name}: {item.base_stat}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default Details;
