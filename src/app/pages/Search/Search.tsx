import React, { useState } from "react";
import { Huta } from "../../../types";
import IconButton from "../../components/IconButton/IconButton";
import SearchIcon from "../../components/Icons/SearchIcon";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import SpeakingDog from "../../components/SpeakingDog/SpeakingDog";
import styles from "./Search.module.css";

type Hutas = Huta[];

export default function SearchPage(): JSX.Element {
  const [hutas, setHutas] = useState<Hutas | null>(null);

  async function handleSearch(
    city: string,
    event: React.FormEvent<HTMLFormElement>
  ) {
    console.log(hutas);
    event.preventDefault();
    const response = await fetch(`/api/search?city=${city}`);
    const searchedHuta = await response.json();
    setHutas(searchedHuta);
  }

  // if (huta) {
  //   return <SearchResults huta={huta} onBack={() => setHuta(null)} />;
  // }

  return (
    <div className={styles.container}>
      <header>
        <SpeakingDog speech="where can i stay?" />
        <h2>Search dog daycare places in…</h2>
      </header>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <LabeledInput label="City name" value={hutas} onChange={setHutas} />
        <IconButton children={<SearchIcon />} title="Search" />
      </form>
      <h3>RESULTS</h3>
      <ul>
        {hutas?.map((huta) => {
          return <li>{huta.name}</li>;
        })}
      </ul>
    </div>
  );
}

// export function SearchResults(hutas: Huta): JSX.Element {
//   return (
//     <div>
//       <header>
//         <IconButton children={<SearchIcon />} title="New search" />
//         <h2>Search result(s)</h2>
//       </header>
//       <main>
//         <ul>
//           {hutas.map((huta) => (
//             <li key={huta._id}>{huta.name}</li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// }
