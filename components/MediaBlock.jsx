import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";

import "./MediaBlock.scss";

// TODO: Image component, Heading component, button component,

function createClassNames(prefix, modifiers) {
  const modifierArr = (typeof modifiers === 'string' ? [modifiers] : modifiers || [])
  .map(modifier => `-${modifier}`);
  return classnames(prefix, modifierArr);
}

function MediaBlock({ title, subTitle, content, asset, ctaButton, variant, className, imageModifiers, mediaModifiers }) {
  const variants = {
    bottomDiagonal: '-bottomDiagonal',
  }
  // const variants = (typeof variant === 'string' ? [variant] : variant).map(it => 'mediaBlock-' + it)

  const imageModifierArr = (typeof imageModifiers === 'string' ? [imageModifiers] : imageModifiers || [])
  .map(it => 'mediaBlock__image-' + it);

  return (
    <div
      className={classnames("mediaBlock", className, variants[variant])}
    >
      <div className={createClassNames("mediaBlock__media", mediaModifiers)}>
        {asset && (
          <img className={createClassNames("mediaBlock__image", imageModifiers)} src={asset.src} alt={asset.alt} />
        )}
      </div>
      <div className="mediaBlock__inner">
        <h1 className="mediaBlock__title">{title}</h1>
        {subTitle && <h2 className="mediaBlock__subTitle">{subTitle}</h2>}
        {content && (
          <div
            className="mediaBlock__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {ctaButton && (
          <a href="mediaBlock__ctaButton" href={ctaButton.url}>
            <span>{ctaButton.icon}</span>
            {ctaButton.label}
          </a>
        )}
      </div>
    </div>
  );
}

MediaBlock.defaultProps = {
  subTitle: "",
  content: "",
  asset: {},
  ctaButton: {},
  variant: "",
  className: "",
};

MediaBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  asset: PropTypes.objectOf(PropTypes.string),
  ctaButton: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default MediaBlock;
