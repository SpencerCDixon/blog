import React, { PropTypes } from 'react';
import css from './Avatar.module.scss';
import { Flex, Box } from 'reflexbox';


function Avatar({ src, alt, subtitle, imageStyle, ...rest }) {
  return (
    <Flex flexColumn {...rest}>
      <Box>
        <img
          src={src}
          alt={alt}
          className={css.avatar}
          style={imageStyle}
        />
      </Box>
      <Box className={css.subtitle}>
        {subtitle}
      </Box>
    </Flex>
  );
}

Avatar.propTypes = {
};
export default Avatar;
