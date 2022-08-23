import usePokeList from "../../service/poke/usePokeList";
import PokeListEntry from "./poke-list-entry/PokeListEntry";
import SearchPanel from "./search-panel/SearchPanel";
import useDebouncedSearch from "./useDebouncedSearch";

function ListPage() {
  const { searchTerm, setSearchTerm, debouncedSearchTerm } =
    useDebouncedSearch("");

  const { pokemons, isLoading, error } = usePokeList();
  return (
    <>
      <SearchPanel searchTerm={searchTerm} onSearchChanged={setSearchTerm} />
      {!isLoading &&
        !error &&
        pokemons
          ?.filter((p) => p.name.includes(debouncedSearchTerm))
          .map((pokemon) => (
            <PokeListEntry key={pokemon.name} name={pokemon.name} />
          ))}
      {isLoading && <div>LOADING</div>}
      {error && <div>ERROR while loading data</div>}
    </>
  );
}

export default ListPage;
