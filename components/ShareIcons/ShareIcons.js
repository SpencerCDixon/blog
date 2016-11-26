import React, { Component, PropTypes } from 'react';
import { ShareCounts, ShareButtons, generateShareIcon } from 'react-share';
import { Flex, Box } from 'reflexbox';
import css from './ShareIcons.module.scss';
import { fonts, colors } from 'css';

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  LinkedinShareCount,
} = ShareCounts;

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
          <h4>Found this useful? Help others save time and share this post ❤️</h4>
        </Box>
        <Flex justify="space-around">
          <Box mx={2}>
            <FacebookShareButton url={url} title={title} description={desc} className={css.icon}>
              <FacebookIcon size={32} />
            </FacebookShareButton>

            <FacebookShareCount url={url} className={css.count}>
              {count => count >= 3 ? count : null}
            </FacebookShareCount>
          </Box>

          <Box mx={2}>
            <LinkedinShareButton url={url} title={title} description={desc} className={css.icon}>
              <LinkedinIcon size={32} />
            </LinkedinShareButton>

            <LinkedinShareCount url={url} className={css.count}>
              {count => count >= 3 ? count : null}
            </LinkedinShareCount>
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
