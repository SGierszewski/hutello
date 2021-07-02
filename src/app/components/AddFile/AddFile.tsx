import React from "react";
import FileUploadIcon from "../Icons/FileUploadIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./AddFile.module.css";

export type AddFileProps = {
  label: string;
  accept: string;
  multiple: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export default function AddFile({
  label,
  accept,
  multiple,
  onChange,
}: AddFileProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label className={styles.addFile__label}>
        {label}
        <div className={styles.addFile__input}>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={onChange}
          />
        </div>
        <span className={styles.addFile__icons}>
          <img className={styles.addFile__preview} src="" alt="" />
          <PlusIcon />
          <FileUploadIcon />
        </span>
      </label>
    </div>
  );
}
