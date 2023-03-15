import React, { useEffect, useState } from "react";
import "./List.style.css";

const List = () => {
  let [pokemonList, setPokemonList] = useState([]);

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
      getPokemonList(pokemonList.length);
    }
  };

  useEffect(() => {
    !pokemonList.length && getPokemonList(0);
  }, [pokemonList.length]);

  return (
    <div className="list">
      <div style={{ backgroundColor: "#ff0" }}>
        {pokemonList.map((obj, i) => {
          return (
            <h1 key={i}>
              {obj.id} - {obj.name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default List;
