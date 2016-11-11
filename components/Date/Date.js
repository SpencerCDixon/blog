import React, { PropTypes } from 'react';
import moment from 'moment';
import { colors, fonts } from 'css';

const sx = {
  color: colors.lightGray,
  fontSize: fonts.small,
};

function Date({ time }) {
  return (
    <span style={sx}>
      {moment(time).format('MMM Do, YYYY')}
    </span>
  );
}

Date.propTypes = {
  time: PropTypes.string,
};
export default Date;
