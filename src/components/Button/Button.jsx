import React from 'react';
import propTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  label, type, href, target, onClick, block,
}) => {
  let Tag = 'button';
  if (href) {
    Tag = 'a';
  }

  return (
    <Tag
      className={`${styles.button}${block ? ` ${styles.block}` : ''}`}
      type={type}
      href={href}
      target={target}
      onClick={onClick}
    >
      {label}
    </Tag>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  href: propTypes.string,
  target: propTypes.string,
  onClick: propTypes.func,
  block: propTypes.bool,
};

Button.defaultProps = {
  type: null,
  href: null,
  target: null,
  onClick: null,
  block: false,
};

export default Button;
