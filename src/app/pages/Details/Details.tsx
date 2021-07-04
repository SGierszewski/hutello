import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import FavoriteCheckbox from "../../components/FavoriteCheckbox/FavoriteCheckbox";
import IconButton from "../../components/IconButton/IconButton";
import FavoriteIcon from "../../components/Icons/FavoriteIcon";
import RequestIcon from "../../components/Icons/RequestIcon";
import styles from "./Details.module.css";

export default function Details(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
      </header>
      <article className={styles.hutaDetails__card}>
        <div className={styles.hutaDetails__card_header}>
          <FavoriteCheckbox icon={<FavoriteIcon />} value="favorite" />
          <h3 className={styles.hutaDetails__card_title}>Dog's Paradise</h3>
          <img
            className={styles.hutaDetails__img}
            src="src/app/assets/images/huta_example1.png"
            alt=""
          />
        </div>
        <IconButton title="Send request">{<RequestIcon />}</IconButton>
        <p className={styles.hutaDetails__info}>
          Wir sind Dog's Paradise, die Hundetagesstätte im Herzen von Köln. Wir
          bieten professionelle und liebevolle Betreuung für Hunde in Köln und
          Umland an. Wir sind werktags von von 07:00 Uhr bis 20:00 Uhr für Ihren
          Liebling da und ermöglichen Spielspaß und Betreuung durch fachkundiges
          Personal in einer harmonischen Gruppe. Unser Gelände umfasst über
          3000qm eingezäunte Fläche zum miteinander Spielen, Toben oder
          Faulenzen. Eine Sandfläche mit Pool sorgt vor allem an heißen Tagen
          für Spaß und Abkühlung. Sollte ein Hund auch mal seine Ruhe wollen,
          bietet unser Gelände viele gemütliche Rückzugsmöglichkeiten und
          Liegeflächen, die natürlich wind- und wettergeschützt sind. Sie
          möchten gerne weitere Infos? Dann kontaktieren Sie uns gerne!
        </p>
        <section className={styles.hutaDetails__images}>
          <img src="src/app/assets/images/huta_example3.jpeg" alt="" />
          <img src="src/app/assets/images/huta_example2.jpeg" alt="" />
          <img src="src/app/assets/images/huta_example2.jpeg" alt="" />
          <img src="src/app/assets/images/huta_example3.jpeg" alt="" />
        </section>
        <div className={styles.hutaDetails__contact}>
          <p>
            Musterstraße 3<br />
            50000 Köln
          </p>
          <p>0000-123456-789</p>
          <a href="">dogs.paradise@email.de </a>
          <a href="">www.dogs-paradise.org</a>
        </div>
      </article>
    </div>
  );
}
