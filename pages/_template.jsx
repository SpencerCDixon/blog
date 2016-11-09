import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { Flex, Box } from 'reflexbox';
import Logo from '../components/Logo';
import NavLink from '../components/NavLink';
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
        >
          <Flex py={2} px={3}>
            <Box> <Logo /> </Box>
            <Box flexAuto/>
            <Flex>
              <Box px={1}> <NavLink to="/blog/">Blog</NavLink> </Box>
              <Box px={1}> <NavLink to="/about/"> About </NavLink> </Box>
              <Box px={1}> <NavLink to="now">Now</NavLink> </Box>
              <Box px={1}> <NavLink to="book">Book</NavLink> </Box>
            </Flex>
          </Flex>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
