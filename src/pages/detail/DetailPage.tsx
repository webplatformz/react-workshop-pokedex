import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../shared/default-layout/DefaultLayout";
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

  const pokemon = usePokeDetail(pokemonName);

  useEffect(() => {
    addPokeVisitDispatch({
      type: "add",
      value: pokemonName,
    });
  }, [addPokeVisitDispatch, pokemonName]);

  if (!pokemon) {
    return null;
  }

  return (
    <DefaultLayout>
      <PokeDetail
        name={pokemon.name}
        image={pokemon.sprites.front_shiny}
        stats={pokemon.stats}
      />
    </DefaultLayout>
  );
}

export default DetailPage;
