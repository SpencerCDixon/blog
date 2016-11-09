import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { colors } from 'css';

const sx = StyleSheet.create({
  link: {
    textDecoration: 'none',
  },
  header: {
    color: colors.linkBlue,
    ':hover': {
      color: colors.black,
    }
  }
});

function HeaderLinks({ to, children }) {
  return (
    <Link to={prefixLink(to)} className={css(sx.link)}>
      <h3 className={css(sx.header)}>
        {children}
      </h3>
    </Link>
  );
}

HeaderLinks.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
export default HeaderLinks;
