import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../core/fetcher";
import { Pokemon, PokemonResultDto } from "./types";

function usePokeList(): Pokemon[] | undefined {
  const { data: pokemons } = useQuery(["pokemon", "list"], () =>
    fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  );

  return pokemons?.results;
}

export default usePokeList;
