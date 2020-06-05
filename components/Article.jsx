import React, { useState, useEffect, useRef } from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "./Heading";
import Button from "../components/Button";
import "./Article.scss";

function Article({
  title,
  subTitle,
  content,
  ctaButton,
  icon,
  className,
  variant,
  image,
}) {
  const imageRef = useRef();

  useEffect(() => {
    const scrollListener = () => {};

    // set resize listener
    window.addEventListener("scroll", scrollListener);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <div className={classnames("article", className, variant)}>
        <div className="article__inner">
          <div className={classnames("article__contentColumn")}>
            {icon && (
              <i className={classnames("article__icon", "fa", `fa-${icon}`)} />
            )}
            <Heading level={1} className="article__title">
              {title}
            </Heading>
            {subTitle && (
              <Heading level={2} className="article__subTitle">
                {subTitle}
              </Heading>
            )}
            {content && (
              <div className="article__contentContainer">
                <div
                  className="article__content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                {ctaButton?.label && (
                  <div className="article__ctaButtonContainer">
                    <Button
                      url={ctaButton.url}
                      text={ctaButton.label}
                      variant={ctaButton.variant}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className={classnames("article__imageColumn")}>
              <img
                {...image}
                className={classnames(image.className, "article__image")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Article.defaultProps = {
  subTitle: "",
  content: "",
  ctaButton: {},
  skiplink: false,
  icon: "",
  variant: [],
  className: "",
  image: null,
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  ctaButton: PropTypes.objectOf(PropTypes.string),
  skiplink: PropTypes.bool,
  icon: PropTypes.string,
  variant: PropTypes.array,
  className: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.string),
};

export default Article;
