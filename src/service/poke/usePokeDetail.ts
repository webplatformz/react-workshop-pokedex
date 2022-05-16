import { useEffect, useState } from "react";
import mapStats from "./mapStats";
import { PokemonDetail } from "./types";

function usePokeDetail(pokemonName: string): PokemonDetail | null {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        { signal: controller.signal }
      );
      const pokemon = await res.json();

      setPokemon({
        ...pokemon,
        stats: mapStats(pokemon.stats),
      });
    })();
    return () => controller.abort();
  }, [pokemonName]);

  return pokemon;
}

export default usePokeDetail;
