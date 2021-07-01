import React from "react";
import NavbarDogIcon from "../Icons/NavbarDogIcon";
import NavbarSearchIcon from "../Icons/NavbarSearchIcon";
import NavbarFavoriteIcon from "../Icons/NavbarFavoriteIcon";
import NavbarLink from "../NavbarLink/NavbarLink";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

type NavbarProps = {
  className: string;
};

export default function Navbar({ className }: NavbarProps): JSX.Element {
  const location = useLocation();
  const activePath: string = location.pathname;
  if (
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotpassword"
  ) {
    return <></>;
  }

  return (
    <div className={className}>
      <div className={styles.navbar}>
        <NavbarLink
          active={activePath === "/profile"}
          link="/profile"
          icon={<NavbarDogIcon />}
        />
        <NavbarLink
          active={activePath === "/search"}
          link="/search"
          icon={<NavbarSearchIcon />}
        />
        <NavbarLink
          active={activePath === "/favorites"}
          link="/favorites"
          icon={<NavbarFavoriteIcon />}
        />
      </div>
    </div>
  );
}
