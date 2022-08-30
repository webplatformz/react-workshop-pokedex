import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokeDetail from "../../service/poke/usePokeDetail";
import { AddPokeVisitAction } from "../../service/poke/usePokeVisit";
import PokeDetail from "./poke-detail/PokeDetail";

type Params = {
  pokemonName: string;
};

type Props = {
  addPokeVisitDispatch: (action: AddPokeVisitAction) => void;
};

function DetailPage({ addPokeVisitDispatch }: Props) {
  const { pokemonName } = useParams<Params>();
  if (!pokemonName) throw new Error("pokemonName is not set");

  const { pokemon, isLoading, error } = usePokeDetail(pokemonName);

  useEffect(() => {
    addPokeVisitDispatch({
      type: "add",
      value: pokemonName,
    });
  }, [addPokeVisitDispatch, pokemonName]);

  return (
    <>
      {isLoading && <span>LOADING</span>}
      {error && <span>ERROR loading Pokemon with name '{pokemonName}'</span>}
      {!isLoading && pokemon && (
        <PokeDetail
          name={pokemon.name}
          image={pokemon.sprites.front_shiny}
          stats={pokemon.stats}
        />
      )}
    </>
  );
}

export default DetailPage;
