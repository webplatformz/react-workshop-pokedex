import classnames from "classnames";
import { Fragment, useState } from "react";
import { Stat } from "../../../service/poke/types";
import styles from "./PokeDetail.module.scss";

type Props = {
  image: string;
  name: string;
  stats: Stat[];
};

function PokeDetail({ name, image, stats }: Props) {
  // store whether the image has loaded - used for smooth fade in transition
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={styles.root}>
      <img
        onLoad={() => {
          setImageLoaded(true);
        }}
        className={classnames(styles.sprite, { [styles.loaded]: imageLoaded })}
        src={image}
        alt=""
      />
      <h1 className="uppercase">{name}</h1>
      <dl>
        {stats.map(({ name, baseStat }) => (
          <Fragment key={name}>
            <dt>{name}</dt>
            <dd>{baseStat}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

export default PokeDetail;
