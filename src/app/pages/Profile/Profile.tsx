import React from "react";
import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import Steffi from "/src/app/assets/images/Steffi.jpeg";
import Susi from "/src/app/assets/images/Susi.png";

export default function Profile(): JSX.Element {
  return (
    <AboutMeCard imageSrc={Steffi} documentImageSrc="" dogImageSrc={Susi} />
  );
}
