import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import FavoriteCheckbox from "../../components/FavoriteCheckbox/FavoriteCheckbox";
import IconButton from "../../components/IconButton/IconButton";
import AlertIcon from "../../components/Icons/AlertIcon";
import FavoriteIcon from "../../components/Icons/FavoriteIcon";
import MailIcon from "../../components/Icons/MailIcon";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import RequestIcon from "../../components/Icons/RequestIcon";
import WebIcon from "../../components/Icons/WebIcon";
import styles from "./Details.module.css";
import HutaLogo from "/src/app/assets/images/huta_logo.jpeg";
import huta1 from "/src/app/assets/images/hutaEx1.png";
import huta2 from "/src/app/assets/images/huta2.jpeg";
import huta3 from "/src/app/assets/images/huta3.jpeg";
import huta4 from "/src/app/assets/images/huta4.jpeg";

export default function Details(): JSX.Element {
  const [requestSend, setRequestSend] = useState(false);
  function handleClick() {
    setRequestSend(true);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
      </header>
      <article className={styles.hutaDetails__card}>
        <div className={styles.hutaDetails__card_header}>
          <FavoriteCheckbox icon={<FavoriteIcon />} value="favorite" />
          <h3 className={styles.hutaDetails__card_title}>Dog's Paradise</h3>
          <img className={styles.hutaDetails__img} src={HutaLogo} alt="" />
        </div>
        <IconButton onClick={handleClick} title="Send request">
          {<RequestIcon />}
        </IconButton>
        {requestSend && (
          <div className={styles.hutaDetails__request}>
            <span>
              <AlertIcon />
            </span>
            <span className={styles.hutaDetails__request_message}>
              Thank you!
              <br />
              Your request to "Dog's Paradise" was sent.
            </span>
          </div>
        )}
        <p className={styles.hutaDetails__info}>
          Wir sind Dog's Paradise, die Hundetagesst??tte im Herzen von K??ln. Wir
          bieten professionelle und liebevolle Betreuung f??r Hunde in K??ln und
          Umland an. Wir sind werktags von von 07:00 Uhr bis 20:00 Uhr f??r Ihren
          Liebling da und erm??glichen Spielspa?? und Betreuung durch fachkundiges
          Personal in einer harmonischen Gruppe. Unser Gel??nde umfasst ??ber
          3000qm eingez??unte Fl??che zum miteinander Spielen, Toben oder
          Faulenzen. Eine Sandfl??che mit Pool sorgt vor allem an hei??en Tagen
          f??r Spa?? und Abk??hlung. Sollte ein Hund auch mal seine Ruhe wollen,
          bietet unser Gel??nde viele gem??tliche R??ckzugsm??glichkeiten und
          Liegefl??chen, die nat??rlich wind- und wettergesch??tzt sind. Sie
          m??chten weitere Infos? Dann kontaktieren Sie uns gerne!
        </p>
        <section className={styles.hutaDetails__images}>
          <img src={huta1} alt="" />
          <img src={huta2} alt="" />
          <img src={huta3} alt="" />
          <img src={huta4} alt="" />
        </section>
        <div className={styles.hutaDetails__contact}>
          <MailIcon />
          <p>
            Musterstra??e 3<br />
            50000 K??ln
          </p>
          <PhoneIcon />
          <p>0000-123456-789</p>
          <WebIcon className={styles.hutaDetails__contact_web} />
          <a href="">dogs.paradise@email.de </a>
          <br />
          <a href="">www.dogs-paradise.org</a>
        </div>
      </article>
    </div>
  );
}
