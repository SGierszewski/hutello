import React from "react";
import AddDog from "../AddDog/AddDog";
import styles from "./AboutMeCard.module.css";

type AboutMeCardProps = {
  imageSrc: string;
  documentImageSrc: string;
  dogImageSrc: string;
};

export default function AboutMeCard({
  imageSrc,
  documentImageSrc,
  dogImageSrc,
}: AboutMeCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.aboutMe__title}>About me</h2>
      <article className={styles.aboutMe__card}>
        <div className={styles.aboutMe__info}>
          <h3>Stefanie Gierszewski</h3>
          <p>Dogstreet 3</p>
          <p>10001 Dogtown</p>
          <h4 className={styles.aboutMe__docs}>My documents</h4>
          <img
            className={styles.aboutMe__docsImg}
            src={documentImageSrc}
            alt=""
          />
        </div>
        <img className={styles.aboutMe__img} src={imageSrc} alt="" />
      </article>
      <h2 className={styles.aboutMe__title}>My dog(s)</h2>
      <article className={styles.aboutMe__card}>
        <div className={styles.aboutMe__info}>
          <h3>Susi</h3>
          <p>Female, 26.02.2020</p>
          <p>Mixed</p>
          <p>54cm, 17kg</p>
        </div>
        <img className={styles.aboutMe__img} src={dogImageSrc} alt="" />
      </article>
      <AddDog label="Add another dog" />
    </div>
  );
}
