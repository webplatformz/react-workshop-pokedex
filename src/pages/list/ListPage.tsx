import DefaultLayout from "../../shared/default-layout/DefaultLayout";
import PokeListEntry from "./poke-list-entry/PokeListEntry";
import usePokeList from "../../service/poke/usePokeList";

function ListPage() {
  const pokemons = usePokeList();
  return (
    <DefaultLayout>
      {pokemons ? (
        pokemons?.map((pokemon) => (
          <PokeListEntry key={pokemon.name} name={pokemon.name} />
        ))
      ) : (
        <div>LOADING</div>
      )}
    </DefaultLayout>
  );
}

export default ListPage;
