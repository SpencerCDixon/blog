import React, { Component, PropTypes } from 'react';
import css from './Avatar.module.scss';
import { Flex, Box } from 'reflexbox';

class Avatar extends Component {
  render() {
    const { src, alt, subtitle, imageStyle, ...rest } = this.props

    return (
      <Flex flexColumn {...rest}>
        <Box>
          <img src={src} alt={alt} className={css.avatar} style={imageStyle} />
        </Box>
        <Box className={css.subtitle}>
          {subtitle}
        </Box>
      </Flex>
    );
  }
}

Avatar.propTypes = {
};
export default Avatar;
