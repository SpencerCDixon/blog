import React, { Component, PropTypes } from 'react';
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
              <strong>Life API</strong> - an app to help me track all sorts of data and metrics about my life.
            </li>
            <li>
              <strong>React UI Kit eBook</strong> - an eBook to teach people how to build a UI Kit in React.
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
