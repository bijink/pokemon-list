import { createContext, useState } from "react";
import "./App.css";
import Details from "./components/details/Details";
import List from "./components/list/List";

export const PokemonDetails = createContext();

function App() {
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <>
      <PokemonDetails.Provider value={{ pokemonDetails, setPokemonDetails }}>
        <div className="App">
          <List />
          <Details />
        </div>
      </PokemonDetails.Provider>
    </>
  );
}

export default App;
