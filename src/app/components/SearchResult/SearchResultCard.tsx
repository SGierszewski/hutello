import React from "react";
import FavoriteCheckbox from "../FavoriteCheckbox/FavoriteCheckbox";
import FavoriteIcon from "../Icons/FavoriteIcon";
import styles from "./SearchResultCard.module.css";
import type { Huta } from "./../../../types";

export default function SearchResultCard({
  name,
  streetName,
  postcode,
  city,
}: Partial<Huta>): JSX.Element {
  return (
    <article className={styles.searchResult__card}>
      <div className={styles.searchResult__card_info}>
        <h3>{name}</h3>
        <p>{streetName}</p>
        <p>
          {postcode} {city}
        </p>
      </div>
      <FavoriteCheckbox value="favorite" icon={<FavoriteIcon />} />
    </article>
  );
}
