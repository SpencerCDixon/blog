import React, { PropTypes } from 'react';
import css from './Tag.module.scss';

function Tag({ children }) {
  return (
    <span className={css.tag}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
};
export default Tag;
