import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarDogIcon from "../Icons/NavbarDogIcon";
import NavbarSearchIcon from "../Icons/NavbarSearchIcon";
import NavbarFavoriteIcon from "../Icons/NavbarFavoriteIcon";

export default {
  title: "Component/NavbarLink",
  component: NavbarLink,
};

export const NavbarProfileLink = (): JSX.Element => (
  <NavbarLink link={"./profile"} icon={<NavbarDogIcon />} />
);
export const NavbarSearchLink = (): JSX.Element => (
  <NavbarLink link={"./search"} icon={<NavbarSearchIcon />} />
);
export const NavbarFavoriteLink = (): JSX.Element => (
  <NavbarLink link={"./favorites"} icon={<NavbarFavoriteIcon />} />
);
