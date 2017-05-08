import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';

class NowIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
        <Helmet title="Spencer Dixon | Now" />
        <h1 className="fade-in">Now.</h1>

        <Flex style={{maxWidth: 650}} flexColumn>
          <p><em><small>Last updated 5/8/2017</small></em></p>

          <p>
            My company <a href="https://wasabi.com/" target="_blank">Wasabi</a> just released our new cloud storage product!  
          </p>

          <p>
            It's been an incredible journey thus far working with some of the most intelligent 
            and experienced engineers I've ever met.  What excites me most about Wasabi is 
            the potential for new start ups to form due to our low storage costs.  <a href="https://medium.com/@wasabi_cloud/welcome-to-wasabi-hot-storage-4e06d58e377c" target="_blank">David Friend's (CEO)
              mission of turning storage into a commodity is very inspiring and makes a ton of sense logically.</a>
          </p>

          <p>
            Now that Boston's no longer a frozen tundra I've been able to get outside and run!
            I always forget how happy warm weather and exercise makes me 😄. 
          </p>

          <p>Side projects and other recent interests:</p>

          <ul>
            <li>
              <a href="https://github.com/SpencerCDixon/oak-lang">
                I've been building a programming language called Oak to learn about lexers, parsers, and compilers.  
                Oak has enabled me to level up in Golang while simultaneously learn fundamental CS skills.
              </a>
            </li>

            <li>
              Been watching WAY too many <a href="https://www.youtube.com/user/caseyneistat">Casey Neistat</a> videos.  
              My roommate and I have also been watching lots of wood/metalworking videos.  <a href="https://www.youtube.com/user/jimmydiresta">Here is a guy who builds some very cool things.</a>
            </li>

            <li>
              I've started condensing and publishing all my notes in a public <a href="https://github.com/SpencerCDixon/notes">git repo.</a>  Eventually I'm probably going to convert these notes into a wiki but haven't decided on a platform yet.
              Been toying with the idea of building my own modern wiki platform #engineer_problems.
            </li>
          </ul>
        </Flex>
      </Flex>
    );
  }
}

export default NowIndex;
