import Link from "../../../shared/visual/link/Link";

type Props = {
  name: string;
};

function PokeListEntry({ name }: Props) {
  return (
    <div className="uppercase">
      <Link to={`/pokemon/${name}`}>{name}</Link>
    </div>
  );
}

export default PokeListEntry;
