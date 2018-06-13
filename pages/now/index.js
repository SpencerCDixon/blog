import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';

class NowIndex extends Component {
  render() {
    return (
      <Flex
        flexColumn
        align="center"
        justify="center"
        style={{ height: '100%' }}>
        <Helmet title="Spencer Dixon | Now" />
        <h1 className="fade-in">Now.</h1>

        <Flex style={{ maxWidth: 650 }} flexColumn>
          <p>
            <em>
              <small>Last updated 6/13/2018</small>
            </em>
          </p>

          <p>
            I just started a new company called{' '}
            <a href="https://tuple.app" target="_blank">
              Tuple
            </a>! If you're a software developer you should definitely check it
            out.
          </p>

          <p>
            Quitting the "day job" and doing my own thing has been the best
            thing ever for my mental and physical health. I'm able to work
            better hours to help with hand pain. Since we're building a
            lifestyle business and don't plan on raising money it's given us a
            lot of freedom to do things like yoga and rockclimb during the day.
          </p>

          <p>Other notable events</p>

          <ul>
            <li>
              Just moved from Cambridge to Somerville to be closer to the
              co-founders and hobbies I love (Rockclimbing/Woodworking). So far
              I'm really digging Somerville.
            </li>

            <li>
              Got a rockclimbing membership at Brooklyn Boulders and am getting
              obsessed with the physical/mental challenge of climbing. Current
              problem I'm working is a <code>10c</code> which requires some
              interesting leg maneuvers.
            </li>

            <li>
              I recently remodelled a shed that my grandparents built 70 years
              ago. My father and I replaced the roof and I painted the outside
              barn red. You can{' '}
              <a
                href="https://www.instagram.com/p/Bj25gCoFx0-/?taken-by=spencercdixon"
                target="_blank">
                see the before and after photo here.
              </a>
            </li>
          </ul>
        </Flex>
      </Flex>
    );
  }
}

export default NowIndex;
