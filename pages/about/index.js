import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Avatar from 'components/Avatar';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';
import CoderSpencer from './coder-spencer-min.jpg';
import BusinessSpencer from './biz-spencer-min.png';
import WinterSpencer from './winter-spencer-min.jpg';

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
        <Flex style={{maxWidth: 650}} flexColumn>
          <p> 
            My name is Spencer (<a href="https://twitter.com/SpencerCDixon" target="_blank">@SpencerCDixon</a>).
            I'm an engineer at <a href="https://wasabi.com/">Wasabi</a> helping to make hot cloud storage a commodity.
          </p>

          <p>
            Find out what I'm up to <Link to="/now/">now</Link>, connect with me <a href="https://www.linkedin.com/in/spencercdixon/">on LinkedIn</a>, and check out some of my <a href="https://github.com/SpencerCDixon">open source projects.</a>
          </p>

          <p>
            I've been building websites for 10+ years and started my first company <a href="http://www.greatlakesaquaponics.com/" target="_blank">Great Lakes Aquaponics</a> when I was 15.  
            As a full stack developer/entrepreneur I'm interested in just about every stage of the product life cycle.
          </p>

          <p>
            In the past I was a bootcamp instructor at <a href="https://www.launchacademy.com/" target="_blank">Launch Academy</a> where I taught eager students how to code with Ruby and Rails.  After teaching, I joined a startup called Smart Scheduling (later known as Arsenal Health) which built predictive models to figure out when patients weren't going to show to their doctors appointments.  Smart Scheduling was <a href="http://newsroom.athenahealth.com/phoenix.zhtml?c=253091&p=irol-newsArticle&ID=2157141" target="_blank">acquired by athenahealth</a> in April, 2016.  

          </p>

          <p>
            If you're into personality tests I'm an <a href="https://www.16personalities.com/intj-personality" target="_blank">INTJ</a> (<i>which explains so much</i>).  I favor <a href="http://www.taylorprotocols.com/" target="_blank">CVI</a> to Myers Briggs so if you're familiar with CVI I'm an <code>Innovator/Builder</code>.
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
