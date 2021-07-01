import React from "react";
import { uploadImage } from "../../../utils/api";
import FileUploadIcon from "../Icons/FileUploadIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./AddFile.module.css";

type AddFileProps = {
  label: string;
  accept: string;
  multiple: boolean;
  imageSrc: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddFile({
  label,
  accept,
  multiple,
  imageSrc,
}: AddFileProps): JSX.Element {
  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const imageFile = event.target.files?.item(0);
    if (!imageFile) {
      return;
    }
    const imageSrc = await uploadImage(imageFile);
    console.log(3, imageSrc);
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
          <img className={styles.addFile__preview} src={imageSrc} alt="" />
          <PlusIcon />
          <FileUploadIcon />
        </span>
      </label>
    </div>
  );
}
