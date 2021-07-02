import React from "react";
import AboutMeCard from "./AboutMeCard";

export default {
  title: "Component/AboutMeCard",
  component: AboutMeCard,
};

export const ProfileCard = (): JSX.Element => (
  <AboutMeCard
    imageSrc="/src/app/assets/images/Steffi.jpeg"
    documentImageSrc=""
    dogImageSrc="/src/app/assets/images/Susi.png"
  />
);
