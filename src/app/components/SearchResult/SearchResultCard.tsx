import React from "react";
import FavoriteIconLink from "../FavoriteIconLink/FavoriteIconLink";
import FavoriteIcon from "../Icons/FavoriteIcon";
import styles from "./SearchResultCard.module.css";

export default function SearchResultCard(): JSX.Element {
  return (
    <article className={styles.searchResult__card}>
      <div className={styles.searchResult__card_info}>
        <h3>Dog's paradise</h3>
        <p>Musterstraße 3</p>
        <p>50677 Köln</p>
      </div>
      <div className={styles.searchResult__favoriteIcon}>
        <FavoriteIconLink link="#" icon={<FavoriteIcon />} active={false} />
      </div>
    </article>
  );
}
