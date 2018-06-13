import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import FAIcon from '@fortawesome/react-fontawesome';
import { Flex, Box } from 'reflexbox';

function SocialIcons() {
  return (
    <Flex justify="space-between" mt={2} style={{ minWidth: 200 }}>
      <a
        target="_blank"
        className={`social-icons ${styles.social}`}
        href="https://twitter.com/SpencerCDixon">
        <FAIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank"
        className={`social-icons ${styles.social}`}
        href="https://github.com/SpencerCDixon">
        <FAIcon icon={faGithub} size="2x" />
      </a>
      <a
        target="_blank"
        className={`social-icons ${styles.social}`}
        href="https://www.instagram.com/spencercdixon/">
        <FAIcon icon={faInstagram} size="2x" />
      </a>
    </Flex>
  );
}

SocialIcons.propTypes = {};
export default SocialIcons;
