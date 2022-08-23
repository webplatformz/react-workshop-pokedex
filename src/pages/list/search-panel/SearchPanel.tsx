import styles from "./SearchPanel.module.scss";

type Props = {
  searchTerm: string;
  onSearchChanged: (searchTerm: string) => void;
};

function SearchPanel({ searchTerm, onSearchChanged }: Props) {
  return (
    <div className={styles.root}>
      <label htmlFor="searchTerm">Search</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        placeholder="Pokemon name"
        onChange={(e) => {
          onSearchChanged(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchPanel;
