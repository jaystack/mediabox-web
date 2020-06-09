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
  const imageColRef = useRef();
  const contentColRef = useRef();

  const [imageScale, setImageScale] = useState(1);
  const [appearList, setAppearList] = useState(true);
  const [appearTitle, setAppearTitle] = useState(true);

  useEffect(() => {
    const scrollListener = () => {
      if (imageColRef?.current && imageRef?.current) {
        const rect = imageColRef.current.getBoundingClientRect();
        const scaleFactor =
          rect.top / (window.innerHeight || rect.height || 1024);
        setImageScale(1 - scaleFactor * 0.25);
      }

      if (appearList && contentColRef?.current) {
        const rect = contentColRef.current.getBoundingClientRect();
        if (!rect || rect.top < window.innerHeight - 100) {
          const items = contentColRef.current.querySelectorAll("ul li");
          (items || []).forEach((it, i) => {
            if (it?.style) {
              it.style.transitionDelay = 0.5 + i * 0.1 + "s";
            }
          });
          setAppearList(false);
        }
      }

      if (contentColRef && contentColRef?.current) {
        const rect = contentColRef.current.getBoundingClientRect();

        if (!rect || rect.top < window.innerHeight + 40) {
          setAppearTitle(false);
        }
      }
    };

    // set resize listener
    window.addEventListener("scroll", scrollListener);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  React.useEffect(() => {
    // Trigger scrollbar to show innitially hidden items (TODO: better solution);
    window.scrollBy(0, -1);
    setTimeout(() => {
      requestAnimationFrame(() => {
        window.scrollBy(0, 1);
      });
    });
  }, []);

  return (
    <>
      <div className={classnames("article", className, variant)}>
        <div className="article__inner">
          <div
            ref={contentColRef}
            className={classnames("article__contentColumn")}
          >
            {icon && (
              <i className={classnames("article__icon", "fa", `fa-${icon}`)} />
            )}
            <Heading
              level={1}
              className={classnames("article__title", appearTitle && "-appear")}
            >
              {title}
            </Heading>
            {subTitle && (
              <Heading level={2} className="article__subTitle">
                {subTitle}
              </Heading>
            )}
            {content && (
              <div className={classnames("article__contentContainer")}>
                <div
                  className={classnames(
                    "article__content",
                    appearList && "-appear"
                  )}
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
            <div
              ref={imageColRef}
              className={classnames("article__imageColumn")}
            >
              <img
                ref={imageRef}
                {...image}
                className={classnames(image.className, "article__image")}
                style={{ transform: `scale(${imageScale})` }}
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
