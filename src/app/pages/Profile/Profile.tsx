import React from "react";
import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import Steffi from "/src/app/assets/images/steffi.png";
import Susi from "src/app/assets/images/susi.png";
import imgUpload from "/src/app/assets/images/imgUpload.png";
import styles from "./Profile.module.css";

export default function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <AboutMeCard
        imageSrc={Steffi}
        documentImageSrc={imgUpload}
        dogImageSrc={Susi}
      />
    </div>
  );
}
