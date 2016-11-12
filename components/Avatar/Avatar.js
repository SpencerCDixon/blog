import React, { PropTypes } from 'react';
import css from './Avatar.module.scss';
import { Flex, Box } from 'reflexbox';


function Avatar({ src, alt, subtitle }) {
  return (
    <Flex flexColumn>
      <Box>
        <img
          src={src}
          alt={alt}
          className={css.avatar}
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
