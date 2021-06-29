import React from "react";
import { uploadImage } from "../../../utils/api";
import FileUploadIcon from "../Icons/FileUploadIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./AddFile.module.css";

type AddFileProps = {
  label: string;
  accept: string;
  multiple: boolean;
  onChange: (files: FileList) => void;
};

export default function AddFile({
  label,
  accept,
  multiple,
}: AddFileProps): JSX.Element {
  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const imageFile = event.target.files?.item(0);
    if (!imageFile) {
      return;
    }
    const imageSrc = uploadImage(imageFile);
    console.log(imageSrc);
    return imageSrc;
  }

  return (
    <div className={styles.container}>
      <label className={styles.addFile__label}>
        {label}
        <div className={styles.addFile__input}>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleImageUpload}
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
