import { useState } from "react";
import usePokeList from "../../service/poke/usePokeList";
import PokeListEntry from "./poke-list-entry/PokeListEntry";
import SearchPanel from "./search-panel/SearchPanel";

function ListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const { pokemons, isLoading, error } = usePokeList();
  return (
    <>
      <SearchPanel searchTerm={searchTerm} onSearchChanged={setSearchTerm} />
      {!isLoading &&
        !error &&
        pokemons
          ?.filter((p) => p.name.includes(searchTerm))
          .map((pokemon) => (
            <PokeListEntry key={pokemon.name} name={pokemon.name} />
          ))}
      {isLoading && <div>LOADING</div>}
      {error && <div>ERROR while loading data</div>}
    </>
  );
}

export default ListPage;
