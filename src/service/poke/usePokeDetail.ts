import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetcher } from "../../core/fetcher";
import mapStats from "./mapStats";
import { PokemonDetail, PokemonDetailDto } from "./types";

type Result = Pick<
  UseQueryResult<PokemonDetail, unknown>,
  "data" | "isError" | "isLoading"
>;

function usePokeDetail(pokemonName: string): Result {
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const { data, isLoading, isError } = useQuery(
    ["pokemon", "detail", pokemonName],
    () => fetcher<PokemonDetailDto>(uri)
  );

  const pokemon: PokemonDetail | undefined = useMemo(
    () => (data ? { ...data, stats: mapStats(data.stats) } : undefined),
    [data]
  );

  return { data: pokemon, isLoading, isError };
}

export default usePokeDetail;
