import { useState, useEffect } from "react";
import { Card } from "./Card";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=224";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemondata = data.results.map(async (currentUrl) => {
        // console.log(current.url)
        const res = await fetch(currentUrl.url);
        const data = await res.json();
        // console.log(data)
        return data;
      });
      const detailedResponse = await Promise.all(detailedPokemondata);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
      // console.log(data)
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  //search
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return;
    <div>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm94cjBvcHoybXY2NWNwaXk1Njg2a2thYzR4ZXM2anRmdGtwdDdhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jAYUbVXgESSti/giphy.webp" alt="loader" />
    </div>;
  }
  if (error) {
    return <div>{error.messege}</div>;
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemon.map((curPoke)=>{ */}
            {searchData.map((curPoke) => {
              return (
                // <li key={curPoke.id}>{curPoke.name}</li>
                <Card key={curPoke.id} pokemonData={curPoke} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
