import Link from "../../../shared/visual/link/Link";

type Props = {
  name: string;
};

function PokeListEntry({ name }: Props) {
  return (
    <li className="uppercase">
      <Link to={`/pokemon/${name}`}>{name}</Link>
    </li>
  );
}

export default PokeListEntry;
