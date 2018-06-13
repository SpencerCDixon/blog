import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Avatar from 'components/Avatar';
import Separator from 'components/Separator';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';
import SocialIcons from 'components/SocialIcons';
import CoderSpencer from './coder-spencer-min.jpg';
import BusinessSpencer from './biz-spencer-min.png';
import WinterSpencer from './winter-spencer-min.jpg';

const Question = ({ children }) => (
  <h3 style={{ fontWeight: 'bold' }}>{children}</h3>
);

class AboutIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center">
        <Helmet title="Spencer Dixon | About" />

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

        <Flex mb={4} flexColumn align="center">
          <SocialIcons />
        </Flex>

        <Flex style={{ maxWidth: 650 }} flexColumn>
          <p>
            My name is Spencer (<a
              href="https://twitter.com/SpencerCDixon"
              target="_blank">
              online everywhere as @SpencerCDixon
            </a>). I'm a software developer, serial entrepreneur, and recovering
            coffee addict. I recently co-founded a new company called{' '}
            <a href="https://tuple.app" target="_blank">
              Tuple
            </a>{' '}
            with a few of my friends. Tuple is a Screenhero replacement for the
            best pair programming experience possible.
          </p>

          <p>
            Find out what I'm up to <Link to="/now/">now</Link>, follow me{' '}
            <a href="https://twitter.com/SpencerCDixon" target="_blank">
              on Twitter
            </a>, and check out some of my{' '}
            <a href="https://github.com/SpencerCDixon">
              open source projects on Github.
            </a>
          </p>

          <p>
            I've been building websites for 10+ years and started my first
            company{' '}
            <a href="http://www.greatlakesaquaponics.com/" target="_blank">
              Great Lakes Aquaponics
            </a>{' '}
            when I was 15. As a full stack developer/entrepreneur I'm interested
            in just about every stage of the product life cycle.
          </p>

          <p style={{ marginBottom: 0 }}>
            If you're into personality tests I'm an{' '}
            <a
              href="https://www.16personalities.com/intj-personality"
              target="_blank">
              INTJ
            </a>{' '}
            (<i>which explains so much</i>). I favor{' '}
            <a href="http://www.taylorprotocols.com/" target="_blank">
              CVI
            </a>{' '}
            to Myers Briggs so if you're familiar with CVI I'm an{' '}
            <code>Innovator/Builder</code>.
          </p>

          <Separator />

          <Question>What is the best way to reach you?</Question>
          <p>The best way to reach me is probably Twitter.</p>

          <Question>Why is your hair blonde but your beard red!?</Question>
          <p>No clue. I must be a mutant 😂 </p>

          <Question>RFS's (Request for Spencers)</Question>
          <p>
            Want more photo versions of me? Weirdo. I've been thinking of adding
            "Rockclimbing Spencer" soon. Stay tuned.
          </p>

          <Question>Do you ever do speaking engagements?</Question>
          <p>
            I do! If you're looking for a speaker on React, Rails, Go,
            bootstrapping, or pair programming those are topics I love talking
            about. Reach out on tweeeeter.
          </p>
        </Flex>
      </Flex>
    );
  }
}

export default AboutIndex;
