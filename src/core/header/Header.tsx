import { ResetPokeVisitAction } from "../../service/poke/usePokeVisit";
import { useUserContext } from "../../service/user/UserContext";
import Link from "../../shared/visual/link/Link";
import styles from "./Header.module.scss";

type Props = {
  visitedPokemon: number;
  resetPokeVisitDispatch: (action: ResetPokeVisitAction) => void;
};

function Header({ visitedPokemon, resetPokeVisitDispatch }: Props) {
  const { userData } = useUserContext();
  return (
    <header className={styles.root}>
      <div>
        <Link to="/">Home</Link> <Link to="/profile">Profile</Link>
      </div>
      <div>{userData?.name ? `Hello, ${userData.name}` : null}</div>
      {visitedPokemon > 0 ? (
        <div>
          {visitedPokemon} pokemon
          <button
            onClick={() => {
              resetPokeVisitDispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
