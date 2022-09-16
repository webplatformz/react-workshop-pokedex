import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../core/fetcher";
import { PokemonResultDto } from "../../service/poke/types";
import PokeListEntry from "./poke-list-entry/PokeListEntry";
import SearchPanel from "./search-panel/SearchPanel";
import useDebouncedSearch from "./useDebouncedSearch";
import styles from "./ListPage.module.scss";

function ListPage() {
  const { searchTerm, setSearchTerm, debouncedSearchTerm } =
    useDebouncedSearch("");

  const { data, isLoading, isError } = useQuery(["pokemon", "list"], () =>
    fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  );

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR while loading data</div>;

  return (
    <div className={styles.root}>
      <SearchPanel searchTerm={searchTerm} onSearchChanged={setSearchTerm} />
      <ul>
        {data.results
          .filter((p) => p.name.includes(debouncedSearchTerm))
          .map((pokemon) => (
            <PokeListEntry key={pokemon.name} name={pokemon.name} />
          ))}
      </ul>
    </div>
  );
}

export default ListPage;
