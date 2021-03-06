import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarLink.module.css";

export type NavbarLinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
  active: boolean;
};

export default function NavbarLink({
  link,
  icon,
  active,
}: NavbarLinkProps): JSX.Element {
  return (
    <Link
      className={
        active ? `${styles.navbarLink__active}` : `${styles.navbarLink}`
      }
      to={link}
    >
      {icon}
    </Link>
  );
}
