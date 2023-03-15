import { createContext, useState } from "react";
import "./App.css";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import List from "./components/list/List";

export const PokemonDetails = createContext();

function App() {
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <>
      <div className="app">
        <Header />
        <PokemonDetails.Provider value={{ pokemonDetails, setPokemonDetails }}>
          <div className="app__main">
            <List />
            <Details />
          </div>
        </PokemonDetails.Provider>
      </div>
    </>
  );
}

export default App;
