import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";

import './Footer.scss';

function Footer({ className, footerContent }) {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__topContainer container">
            <Link href="/">
              <a className="footer__logoLink">
                <img
                  className="footer__logo"
                  src={footerContent.logoSrc}
                  alt={footerContent.title}
                />
              </a>
            </Link>
            {footerContent.menuBlocks.map((menuBlock, key) => (
              <div key={key} className="footer__menuBlock">
                <h3 className="footer__title">{menuBlock.title}</h3>
                <ul className="footer__menu">
                  {menuBlock.menuItems.map((menuItem, key) => (
                    <li key={key} className="footer__menuItem">
                      <Link href={menuItem.href}>
                        <a className="footer__menuItemLink">{menuItem.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
            <div className="footer__contact">
              <h3 className="footer__title">{footerContent.contact.title}</h3>
              <div  
                className="footer_contactContent" 
                dangerouslySetInnerHTML={{ __html: footerContent.contact.content }}
              />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottomContainer container">
            <small className="footer__copyRight">{footerContent.copyRight}</small>
            <ul className="footer__iconMenu">
              {footerContent.iconMenuItems.map((menuItem, key) => (
                <li key={key} className="footer__iconMenuItem">
                  <a 
                    className="footer__iconMenuItemLink"
                    href={menuItem.href}
                  >
                    {menuItem.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Link href="#top">
            <a className="footer__toTopButton">
              <div className="footer__toTopButtonInner">
                <i className="footer__toTopButtonIcon fa fa-angle-up"></i>
                <i className="footer__toTopButtonHoverIcon fa fa-angle-up"></i>
              </div>
            </a>
          </Link>
        </div>
      </footer>
      <Link href="/">
        <a className="footer__homeButton">
          <i className="fa fa-home" />
        </a>
      </Link>
    </>
  );
}

Footer.defaultProps = {
  className: "",
};

Footer.propTypes = {
  footerContent: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Footer;
