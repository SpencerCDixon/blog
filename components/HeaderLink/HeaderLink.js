import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import css from './HeaderLink.module.scss';

function HeaderLink({ to, children, ...rest}) {
  return (
    <Link to={prefixLink(to)} className={css.link}>
      <h3 className={css.header} {...rest}>
        {children}
      </h3>
    </Link>
  );
}

HeaderLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
export default HeaderLink;
