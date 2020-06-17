import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";
import Menu from "./Menu";

import "./PageHeader.scss";
import { PropertyBinding } from "three";

function PageHeader({ className, navbarContent, compactMenuWidthBreakpoint }) {
  const [showMenu, setShowMenu] = useState(false);
  const autCloseMennu = () => {
    if (window.innerWidth > compactMenuWidthBreakpoint) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      autCloseMennu();
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);
    // cleanup
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [autCloseMennu]);

  return (
    <>
      <nav className="navBar">
        <Link href="/">
          <a className="navBar__logoLink">
            <img
              className="navBar__logo"
              src={navbarContent.logoSrc}
              alt={navbarContent.title}
            />
          </a>
        </Link>
        <ul className="navBar__menu">
          {navbarContent.menuItems.map((menuItem, key) => (
            <li key={key} className="navBar__menuItem">
              <Link href={menuItem.href}>
                <a className="navBar__menuItemLink">{menuItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="navBar__iconMenu">
          {navbarContent.iconMenuItems.map((menuItem, key) => (
            <li key={key} className="navBar__iconMenuItem">
              <a className="navBar__iconMenuItemLink" href={menuItem.href}>
                {menuItem.icon}
              </a>
            </li>
          ))}
          <li className="navBar__menuButtonContainer">
            <img
              onClick={() => {
                setShowMenu(true);
              }}
              draggable="false"
              className={classnames(
                "navBar__menuButton -open",
                !showMenu && "-visible"
              )}
              src="images/menuButton.png"
              alt=""
            />
            <img
              onClick={() => {
                setShowMenu(false);
              }}
              draggable="false"
              className={classnames(
                "navBar__menuButton -close",
                showMenu && "-visible"
              )}
              src="images/menuButtonClose.png"
              alt=""
            />
          </li>
        </ul>
      </nav>
      <Menu
        className={showMenu ? "-open" : ""}
        onCloseBtnClick={() => {
          setShowMenu(false);
        }}
        menuItems={[...navbarContent.menuItems]}
        iconMenuItems={[...navbarContent.iconMenuItems]}
      />
    </>
  );
}

PageHeader.defaultProps = {
  className: "",
  compactMenuWidthBreakpoint: 1150, // Have to sync with "$compactMenuWidthBreakpoint" css var.
};

PageHeader.propTypes = {
  navbarContent: PropTypes.object.isRequired,
  className: PropTypes.string,
  compactMenuWidthBreakpoint: PropTypes.number.isRequired,
};

export default PageHeader;
