import React, { Component, PropTypes } from 'react';
import css from './Avatar.module.scss';
import { Flex, Box } from 'reflexbox';

class Avatar extends Component {
  state = {
    loaded: false,
  }

  handleLoad = () => {
    this.setState({loaded: true});
  }

  render() {
    const { src, alt, subtitle, imageStyle, ...rest } = this.props

    return (
      <Flex flexColumn {...rest}>
        <Box>
          {!this.state.loaded && <div style={{width: 200, height: 200}} />}
          <img src={src} alt={alt} className={css.avatar} style={imageStyle} onLoad={this.handleLoad} />
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
