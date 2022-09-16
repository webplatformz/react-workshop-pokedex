import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetcher } from "../../core/fetcher";
import mapStats from "./mapStats";
import { PokemonDetail, PokemonDetailDto } from "./types";

type Result = {
  pokemon?: PokemonDetail;
  isLoading: boolean;
  error: unknown;
};

function usePokeDetail(pokemonName: string): Result {
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const { data, isLoading, error } = useQuery(
    ["pokemon", "detail", pokemonName],
    () => fetcher<PokemonDetailDto>(uri)
  );

  const pokemon: PokemonDetail | undefined = useMemo(
    () => (data ? { ...data, stats: mapStats(data.stats) } : undefined),
    [data]
  );

  return { pokemon, isLoading, error };
}

export default usePokeDetail;
