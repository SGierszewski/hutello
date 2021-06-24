import React, { useState } from "react";
import IconButton from "../../components/IconButton/IconButton";
import SearchIcon from "../../components/Icons/SearchIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import SpeakingDog from "../../components/SpeakingDog/SpeakingDog";
import styles from "./Search.module.css";
import type { DogsPlaces } from "../../../../src/types";

export default function SearchPage(): JSX.Element {
  const [dogsPlacesCity, setDogsPlacesCity] = useState<DogsPlaces | null>(null);

  async function handleSearch(dogsPlacesCity: string) {
    const response = await fetch(`/api/search?city=${dogsPlacesCity}`);
    const searchedCity = await response.json();
    setDogsPlacesCity(searchedCity);
  }

  if (dogsPlacesCity) {
    return (
      <SearchResults
        dogsPlaces={dogsPlaces}
        onBack={() => setDogsPlacesCity(null)}
      />
    );
  }

  return (
    <div>
      <header>
        <SpeakingDog speech="where can i stay?" />
        <h2>Search dog daycare places in…</h2>
      </header>
      <form className={styles.searchForm} onSearch={handleSearch}>
        <LabeledInput
          label="City name"
          value={dogsPlacesCity}
          onChange={setDogsPlacesCity}
        />
        <IconButton children={<SearchIcon />} title="Search" />
      </form>
    </div>
  );
}

export function SearchResults({ dogsPlaces }: DogsPlaces): JSX.Element {
  return (
    <div>
      <header>
        <IconButton children={<SearchIcon />} title="New search" />
        <h2>Search result(s)</h2>
      </header>
      <main>
        <ul>
          {dogsPlaces.map((dogsPlace) => (
            <li key={dogsPlace.id}>{dogsPlace.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
