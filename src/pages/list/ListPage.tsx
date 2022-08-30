import PokeListEntry from "./poke-list-entry/PokeListEntry";
import usePokeList from "../../service/poke/usePokeList";

function ListPage() {
  const { pokemons, isLoading, error } = usePokeList();
  return (
    <>
      {!isLoading &&
        !error &&
        pokemons?.map((pokemon) => (
          <PokeListEntry key={pokemon.name} name={pokemon.name} />
        ))}
      {isLoading && <div>LOADING</div>}
      {error && <div>ERROR while loading data</div>}
    </>
  );
}

export default ListPage;
