import { useEffect, useState } from "react";
import mapStats from "./mapStats";
import { PokemonDetail } from "./types";

function usePokeDetail(pokemonName: string): PokemonDetail | null {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const pokemon = await res.json();
      if (!cancelled) {
        setPokemon({
          ...pokemon,
          stats: mapStats(pokemon.stats)
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pokemonName]);

  return pokemon;
}

export default usePokeDetail;
