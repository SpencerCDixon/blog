import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, colors } from 'css';

const sx = StyleSheet.create({
  button: {
    color: colors.linkBlue,
    border: `2px solid ${colors.linkBlue}`,
    padding: '12px 20px',
    borderRadius: '3px',
    height: '100%',
    display: 'inline-block',
    ':hover': {
      border: `2px solid ${colors.black}`,
      color: colors.black,
      cursor: 'pointer',
    }
  },
  text: {
    fontFamily: fonts.secondary,
    fontWeight: fonts.thin,
  },
});

function Button({ children, ...rest }) {
  return (
    <a className={css(sx.button)} {...rest}>
      <span className={css(sx.text)}>{children}</span>
    </a>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
export default Button;
