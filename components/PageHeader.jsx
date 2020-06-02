import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

import "./PageHeader.scss";


function PageHeader({ className, navbarContent }) { 

  return (
    <>
      <nav className="navBar">
        <Link href="/">
          <a className="navBar__logoLink">
            <img className="navBar__logo" src={navbarContent.logoSrc} alt={navbarContent.title} />
          </a>
        </Link>
        <ul className="navBar__menu">
          {
            navbarContent.menuItems.map((menuItem, key) => (
              <li
                key={key}
                className="navBar__menuItem"
              >
                <Link  href={menuItem.href}> 
                  <a className="navBar__menuItemLink">
                    {menuItem.title}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
};

PageHeader.defaultProps = {
  className: "",
};

PageHeader.propTypes = {
  navbarContent: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default PageHeader;
