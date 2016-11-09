import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, space } from 'css';

const sx = StyleSheet.create({
  tag: {
    background: 'rgba(0,0,0,.1)',
    padding: space[1],
    fontFamily: fonts.secondary,
    fontWeight: fonts.xThin,
    fontSize: fonts.small,
    cursor: 'pointer',
    borderRadius: '3px',
    textTransform: 'capitalize',
    ':hover': {
      background: 'rgba(0,0,0,.2)',
    }
  },
});

function Tag({ children }) {
  return (
    <span className={css(sx.tag)}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
};
export default Tag;
