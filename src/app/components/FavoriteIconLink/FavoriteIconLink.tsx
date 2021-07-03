import React from "react";
import { Link } from "react-router-dom";
import styles from "./FavoriteIconLink.module.css";

export type FavoriteIconLinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
  active: boolean;
};

export default function FavoriteIconLink({
  link,
  icon,
  active,
}: FavoriteIconLinkProps): JSX.Element {
  return (
    <Link
      className={
        active
          ? `${styles.favoriteIconLink__active}`
          : `${styles.favoriteIconLink}`
      }
      to={link}
    >
      {icon}
    </Link>
  );
}
