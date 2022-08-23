import { useEffect, useState } from "react";

function useDebouncedSearch(initialSearchTerm: string) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    var timoutId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(timoutId);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, debouncedSearchTerm };
}

export default useDebouncedSearch;
