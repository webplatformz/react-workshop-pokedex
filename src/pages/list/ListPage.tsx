import PokeListEntry from "./poke-list-entry/PokeListEntry";
import usePokeList from "../../service/poke/usePokeList";

function ListPage() {
  const pokemons = usePokeList();
  return (
    <>
      {pokemons ? (
        pokemons?.map((pokemon) => (
          <PokeListEntry key={pokemon.name} name={pokemon.name} />
        ))
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}

export default ListPage;
