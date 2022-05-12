import {
  Link as ReactRouterDomLink,
  LinkProps as ReactRouterDomLinkProps,
} from "react-router-dom";
import styles from "./Link.module.scss";

function Link(props: ReactRouterDomLinkProps) {
  return <ReactRouterDomLink {...props} className={styles.root} />;
}

export default Link;

export type LinkProps = ReactRouterDomLinkProps;
