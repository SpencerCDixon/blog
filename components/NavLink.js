import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { StyleSheet, css } from 'aphrodite';
import { colors, fonts } from 'css';

const sx = StyleSheet.create({
  active: {
    color: colors.black,
  },
  base: {
    fontFamily: fonts.secondary,
    fontWeight: fonts.xThin,
    color: colors.lightGray,
    textDecoration: 'none',
    fontSize: fonts.nav,
    ':hover': {
      color: colors.black,
    }
  }
});

function NavLink({to, children}) {
  return (
    <Link 
      to={prefixLink(to)} 
      className={css(sx.base)} 
      activeClassName={css(sx.active)}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default NavLink;
