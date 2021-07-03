import React from "react";
import NavbarFavoriteIcon from "../Icons/NavbarFavoriteIcon";
import styles from "/SearchResultCard.module.css";

export default function SearchResultCard(): JSX.Element {
  return (
    <article className={styles.searchResult__card}>
      <h3>Dog's paradise</h3>
      <p>Musterstraße 3</p>
      <p>50677 Köln</p>
      <div className={styles.searchResult__favoriteIcon}>
        <NavbarFavoriteIcon />
      </div>
    </article>
  );
}
