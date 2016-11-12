import React, { Component, PropTypes } from 'react';
import Avatar from 'components/Avatar';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';
import CoderSpencer from './coder-spencer.jpg';
import BusinessSpencer from './biz-spencer.png';
import WinterSpencer from './winter-spencer.jpg';

class AboutIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center">
        <h1 className="fade-in">Hi, I'm Spencer.</h1>
        <p>And you don't know me... yet.</p>
        <Flex wrap justify="center" mb={3}>
          <Box mx={2}>
            <Avatar 
              src={BusinessSpencer} 
              alt="Business Spencer Dixon" 
              subtitle="Business Spencer"
            />
          </Box>
          <Box mx={2}>
            <Avatar 
              src={CoderSpencer} 
              alt="Coder Spencer Dixon" 
              subtitle="Coder Spencer"
            />
          </Box>
          <Box mx={2}>
            <Avatar 
              src={WinterSpencer} 
              alt="Winter Spencer Dixon" 
              subtitle="Winter Spencer"
            />
          </Box>
        </Flex>
        <Flex style={{maxWidth: 650}} flexColumn>
          <p>
            I'm an entrepreneur, hacker, educator, and life long learner.
            Find out what I'm up to <Link to="/now/">now</Link>, <a href="https://twitter.com/SpencerCDixon">follow me on twitter</a>, and check out some of my <a href="https://github.com/SpencerCDixon">open source projects.</a>
          </p>

          <p>
            If you're into personality tests I'm an <a href="https://www.16personalities.com/intj-personality" target="_blank">INTJ</a> (<i>which explains so much</i>).  You can reach me at <strong>spencercdixon@gmail.com</strong>. No recruiters please.
          </p>
        </Flex>
      </Flex>
    );
  }
}

export default AboutIndex;
