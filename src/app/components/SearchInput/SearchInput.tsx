import React, { useState } from "react";
import IconButton from "../IconButton/IconButton";
import SearchIcon from "../Icons/SearchIcon";
import LabeledInput from "../LabeledInput/LabeledInput";

type HutaSearchProps = {
  onSubmit: (searchValue: string) => void;
};

export default function HutaSearch({ onSubmit }: HutaSearchProps): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <form
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
