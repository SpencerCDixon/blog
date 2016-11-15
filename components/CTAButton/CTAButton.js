import React, { PropTypes } from 'react';
import css from './CTAButton.module.scss';

function CTAButton({ children, ...rest }) {
  return (
    <button className={css.button} {...rest}>
      {children}
    </button>
  );
}

CTAButton.propTypes = {
};
export default CTAButton;
