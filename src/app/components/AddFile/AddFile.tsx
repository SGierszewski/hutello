import React from "react";
import FileUploadIcon from "../Icons/FileUploadIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./AddFile.module.css";

type AddFileProps = {
  label: string;
  id: string;
  name: string;
  accept: string;
  multiple: boolean;
};

export default function AddFile({
  label,
  id,
  name,
  accept,
  multiple,
}: AddFileProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label className={styles.addFile__label}>
        {label}
        <div className={styles.addFile__input}>
          <input
            type="file"
            id={id}
            name={name}
            accept={accept}
            multiple={multiple}
          />
        </div>
        <span className={styles.addFile__icons}>
          <PlusIcon />
          <FileUploadIcon />
        </span>
      </label>
    </div>
  );
}
