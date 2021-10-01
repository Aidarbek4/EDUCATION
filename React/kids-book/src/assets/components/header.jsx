import React from "react";
import { Logo, Button } from "./index";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <div className="header__cart">
          <Button className="button--cart" />
        </div>
      </div>
    </div>
  );
}

export default Header;