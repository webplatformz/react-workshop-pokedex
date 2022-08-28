import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetcher } from "../../core/fetcher";
import mapStats from "./mapStats";
import { PokemonDetail, PokemonDetailDto } from "./types";

function usePokeDetail(pokemonName: string): PokemonDetail | undefined {
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const { data } = useQuery(["pokemon", "detail"], () =>
    fetcher<PokemonDetailDto>(uri)
  );

  const pokemon: PokemonDetail | undefined = useMemo(
    () => (data ? { ...data, stats: mapStats(data.stats) } : undefined),
    [data]
  );

  return pokemon;
}

export default usePokeDetail;
