import {
  Link as ReactRouterDomLink,
  LinkProps as ReactRouterDomLinkProps,
} from "react-router-dom";
import styles from "./Link.module.scss";
import classNames from "classnames";

function Link({ className, ...props }: ReactRouterDomLinkProps) {
  return (
    <ReactRouterDomLink {...props} className={classNames(styles, className)} />
  );
}

export default Link;

export type LinkProps = ReactRouterDomLinkProps;
