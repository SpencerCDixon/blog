import React, { PropTypes } from 'react';
import fecha from 'fecha';
import { colors, fonts } from 'css';

const sx = {
  color: colors.lightGray,
  fontSize: fonts.small,
};

function Date({ time }) {
  let formatted;
  const parsed = fecha.parse(time, 'YYYY-DD-MM');
  if (parsed) {
    formatted = fecha.format(parsed, 'mediumDate');
  } else {
    formatted = 'Unknown Date'
  }

  return (
    <span style={sx}>
      {formatted}
    </span>
  );
}

Date.propTypes = {
  time: PropTypes.string,
};
export default Date;
