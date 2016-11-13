import React, { Component, PropTypes } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Flex, Box } from 'reflexbox';
import css from './ShareIcons.module.scss';

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon  = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');

class ShareIcons extends Component {
  render() {
    const { url, title, desc } = this.props;
    return (
      <Flex flexColumn justify="center" align="center">
        <Box mr={2}>
          <h4>Found this useful? Pay it forward and share with frandz ❤️</h4>
        </Box>
        <Flex justify="space-around">
          <Box mx={2}>
            <FacebookShareButton url={url} title={title} className={css.icon}>
              <FacebookIcon size={32} />
            </FacebookShareButton>
          </Box>

          <Box mx={2}>
            <LinkedinShareButton url={url} title={title} className={css.icon}>
              <LinkedinIcon size={32} />
            </LinkedinShareButton>
          </Box>

          <Box mx={2}>
            <TwitterShareButton url={url} title={title} className={css.icon}>
              <TwitterIcon size={32} />
            </TwitterShareButton>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

ShareIcons.propTypes = propTypes;
export default ShareIcons;
