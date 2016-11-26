import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';

class NowIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
        <h1 className="fade-in">Now.</h1>

        <Flex style={{maxWidth: 650}} flexColumn>
          <p>
            Just got back to Cambridge after spending the last 2 months living on a <a href="http://cranberryisles.com/index.html" target="_blank">small island in Maine.</a>
          </p>

          <p>

            I committed to running all 37 columns of the Harvard Stadium so I've been training for that.
          </p>

          <p>
            Side projects I've been working on in my spare time:
          </p>

          <ol>
            <li>
              <strong>Life API</strong> - an app to help me track all sorts of data and metrics about my life.  It's called Roots, 
              as in the roots required to live a fulfilling life.  <a href="https://dashboard.spencerdixon.com/sign_up" target="_blank">If you want to create an account and check it out you can do that
              here.</a>
            </li>
            <li>
              <strong>React UI Kit eBook</strong> - an eBook to teach people how to build a UI Kit in React.  Learn more about the book &nbsp;
              <Link to={prefixLink('/book/')}>
                and sign up for updates!
              </Link>
            </li>
            <li>
              <strong>Blog Redesign</strong> - you're reading it now!  Hope you like the new look :-)
            </li>
          </ol>
        </Flex>
      </Flex>
    );
  }
}

export default NowIndex;
