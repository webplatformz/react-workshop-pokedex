type Props = {
  searchTerm: string;
  onSearchChanged: (searchTerm: string) => void;
};

function SearchPanel({ searchTerm, onSearchChanged }: Props) {
  return (
    <>
      <label htmlFor="searchTerm">Search:</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        placeholder="What pokemon are you looking for?"
        onChange={(e) => {
          onSearchChanged(e.target.value);
        }}
      />
    </>
  );
}

export default SearchPanel;
