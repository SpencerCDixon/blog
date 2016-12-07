import React, { PropTypes } from 'react';
import css from './Button.module.scss';

function Button({ children, ...rest }) {
  return (
    <button className={css.button} {...rest}>
      <span className={css.text}>{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
