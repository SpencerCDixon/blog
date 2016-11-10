import React, { PropTypes } from 'react';
import fecha from 'fecha';
import { colors, fonts } from 'css';

const sx = {
  color: colors.lightGray,
  fontSize: fonts.small,
};

function Date({ time }) {
  return (
    <span style={sx}>
      {fecha.format(fecha.parse(time, 'YYYY-DD-MM'), 'mediumDate')}
    </span>
  );
}

Date.propTypes = {
  time: PropTypes.string,
};
export default Date;
