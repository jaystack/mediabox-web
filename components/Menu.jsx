import React, { useState, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import classnames from "classnames";
import Link from "next/link";

import "./Menu.scss";

function Menu({
  variant,
  className,
  onCloseBtnClick,
  menuItems,
  iconMenuItems,
}) {
  useEffect(() => {
    const resizeListener = () => {};
    // set resize listener
    window.addEventListener("resize", resizeListener);
    // cleanup
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  return (
    <div className={classnames("menu", className, variant)}>
      <div className="menu__left">
        <ul className="menu__items">
          {menuItems.map((menuItem, key) => (
            <li key={key} className="menu__item" onClick={onCloseBtnClick}>
              <Link href={menuItem.href}>
                <a className="menu__itemLink">{menuItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__right">
        <div className="menu__card">
          <h3>GET IN TOUCH</h3>
          <p>20-22 Wenlock Road</p>
          <p>London, N1 7GU</p>
          <p>T: 0203 7459067</p>
          <p>E: info@mediaboxsolutions.co.uk</p>
        </div>
        <ul className="menu__iconItems">
          {iconMenuItems.map((menuItem, key) => (
            <li key={key} className="menu__iconItem">
              <a className="menu__iconItemLink" href={menuItem.href}>
                {menuItem.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/">
        <a className="menu__homeLink" onClick={onCloseBtnClick}>
          <img
            draggable="false"
            className="menu__logo"
            src={"/mediabox-darkbg.svg"}
            alt={""}
          />
        </a>
      </Link>

      <img
        onClick={onCloseBtnClick}
        draggable="false"
        className="menu__button"
        src={"/images/menuButtonClose.png"}
        alt={""}
      />
    </div>
  );
}

Menu.defaultProps = {
  variant: [],
  className: "",
  onCloseBtnClick: () => {},
};

Menu.propTypes = {
  variant: PropTypes.array,
  className: PropTypes.string,
  onCloseBtnClick: PropTypes.func,
  menuItems: PropTypes.arrayOf(object).isRequired,
  iconMenuItems: PropTypes.arrayOf(object).isRequired,
};

export default Menu;
