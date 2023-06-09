import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./List.style.css";

const List = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonList = async (offsetValue) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetValue}`)
      .then((response) => response.json())
      .then((data) => {
        data?.results?.map(async (item) => {
          await fetch(item?.url)
            .then((response) => response.json())
            .then((data) => {
              setPokemonList((state) => {
                state = [...state, data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
              });
            });
        });
      });
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setTimeout(() => {
        getPokemonList(pokemonList.length);
      }, 1000);
    }
  };

  useEffect(() => {
    !pokemonList.length && getPokemonList(0);
  }, [pokemonList.length]);

  return (
    <div className="list">
      {pokemonList.map((poke) => {
        return <Card key={poke.id} pokemon={poke} />;
      })}
      <p className="list__loading">Loading...</p>
    </div>
  );
};

export default React.memo(List);
