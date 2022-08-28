// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../core/fetcher";
import { Pokemon, PokemonResultDto } from "./types";

// old implementation which was 1:1 replaced by useSWR
/*
function usePokeList(): Pokemon[] | null {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
      const pokemons = (await res.json()) as PokemonResultDto;
      if (!cancelled) {
        setPokemons(pokemons.results);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return pokemons;
}*/

function usePokeList(): Pokemon[] | undefined {
  const { data: pokemons } = useQuery(["todos"], () =>
    fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  );

  return pokemons?.results;
}

export default usePokeList;
