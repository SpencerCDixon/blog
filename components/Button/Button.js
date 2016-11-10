import React, { PropTypes } from 'react';
import css from './Button.module.scss';

function Button({ children, ...rest }) {
  return (
    <a className={css.button} {...rest}>
      <span className={css.text}>{children}</span>
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
