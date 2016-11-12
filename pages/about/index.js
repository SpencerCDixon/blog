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
            I've been building websites since I was 14 years old and started my first company <a href="http://www.greatlakesaquaponics.com/">Great Lakes Aquaponics</a> when I was 15.  As a full stack developer I'm interested in just about every stage of the product life cycle.
          </p>

          <p>
            In the past I was a bootcamp instructor at <a href="https://www.launchacademy.com/" target="_blank">Launch Academy</a> where I taught eager students how to code with Ruby and Rails.  After Launch, I joined a start up called Smart Scheduling which built predictive models to figure out when patients weren't going to show to their doctors appointments.  Smart Scheduling was <a href="http://newsroom.athenahealth.com/phoenix.zhtml?c=253091&p=irol-newsArticle&ID=2157141" target="_blank">acquired by athenahealth</a> in April, 2016.  While at athena I rebuilt their streamlined UI Kit into React and used that UI Kit to integrate Smart Scheduling into their flagship product (athenaNet).  Currently, I'm a frontend engineer at another startup called <a href="http://www.bluearchive.com/" target="_blank">BlueArchive</a>.
          </p>

          <p>
            If you're into personality tests I'm an <a href="https://www.16personalities.com/intj-personality" target="_blank">INTJ</a> (<i>which explains so much</i>).  Personally I'm more interested in <a href="http://www.taylorprotocols.com/" target="_blank">CVI</a> than Myers Briggs so if you're familiar with CVI I'm an <code>Innovator/Builder</code>.
          </p>

          <p>
            You can reach me at <strong>spencercdixon@gmail.com</strong>. No recruiters please.
          </p>
        </Flex>
      </Flex>
    );
  }
}

export default AboutIndex;
