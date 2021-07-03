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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          pharetra vel turpis nunc eget lorem dolor sed viverra. Consectetur
          purus ut faucibus pulvinar elementum integer enim neque volutpat.
          Accumsan tortor posuere ac ut. Suspendisse ultrices gravida dictum
          fusce ut placerat orci nulla. Commodo ullamcorper a lacus vestibulum
          sed. Vitae proin sagittis nisl rhoncus mattis rhoncus. Tincidunt eget
          nullam non nisi est sit amet facilisis. Interdum consectetur libero id
          faucibus nisl. Vel facilisis volutpat est velit egestas dui id ornare.
          Enim eu turpis egestas pretium aenean pharetra magna ac. Mauris augue
          neque gravida in fermentum et sollicitudin.
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
            50000 Musterstadt
          </p>
          <p>0000-123456-789</p>
          <a href="">huta@email.de </a>
          <a href="">www.huta.de</a>
        </div>
      </article>
    </div>
  );
}
