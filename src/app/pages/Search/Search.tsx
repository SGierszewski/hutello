import React, { useState } from "react";
import { Huta } from "../../../types";
import HutaSearch from "../../components/SearchInput/SearchInput";
import SearchResultCard from "../../components/SearchResult/SearchResultCard";
import SpeakingDog from "../../components/SpeakingDog/SpeakingDog";
import styles from "./Search.module.css";

type Hutas = Huta[];

export default function SearchPage(): JSX.Element {
  const [hutas, setHutas] = useState<Hutas | null>(null);

  async function handleSearch(city: string) {
    const response = await fetch(`/api/hutas?city=${city}`);
    const searchedHuta = await response.json();
    setHutas(searchedHuta);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SpeakingDog speech="where can i stay?" />
        <h2 className={styles.header__subtitle}>
          Search dog daycare places in…
        </h2>
      </header>
      <HutaSearch onSubmit={handleSearch} />
      <h3 className={styles.searchResults__title}>Search result(s)</h3>
      <ul className={styles.searchResults__list}>
        {hutas?.map((huta) => {
          return (
            <li key={huta.name} className={styles.searchResults__item}>
              <SearchResultCard
                name={huta.name}
                streetName={huta.streetName}
                postcode={huta.postcode}
                city={huta.city}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
