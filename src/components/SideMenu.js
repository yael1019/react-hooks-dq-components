import React from "react";
import MenuLinks from './MenuLinks';
import Search from "./Search";
import Logo from "./Logo";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
