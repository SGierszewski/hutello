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
          <span>10001 Dogtown</span>
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
          <span>Female, 26.02.2020</span>
          <p>Mixed</p>
          <span>54cm, 17kg</span>
        </div>
        <img className={styles.aboutMe__img} src={dogImageSrc} alt="" />
      </article>
      <AddDog label="" />
    </div>
  );
}
