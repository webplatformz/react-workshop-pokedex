import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../core/fetcher";
import { Pokemon, PokemonResultDto } from "./types";

type Result = {
  pokemons?: Pokemon[];
  isLoading: boolean;
  error: unknown;
};

function usePokeList(): Result {
  const {
    data: pokemons,
    isLoading,
    error,
  } = useQuery(["pokemon", "list"], () =>
    fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  );

  return { pokemons: pokemons?.results, isLoading, error };
}

export default usePokeList;
