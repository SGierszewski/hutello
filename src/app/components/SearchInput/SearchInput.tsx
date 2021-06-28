import React, { useState } from "react";
import IconButton from "../IconButton/IconButton";
import SearchIcon from "../Icons/SearchIcon";
import LabeledInput from "../LabeledInput/LabeledInput";
import styles from "./SearchInput.module.css";

type HutaSearchProps = {
  onSubmit: (searchValue: string) => void;
};

export default function HutaSearch({ onSubmit }: HutaSearchProps): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <LabeledInput label="Search city" value={search} onChange={setSearch} />
      <IconButton title="Search">
        <SearchIcon />
      </IconButton>
    </form>
  );
}
