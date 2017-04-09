import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom'
import NavLink from '../NavLink';
import Logo from '../Logo';
import MediaQuery from 'react-responsive';
import { rhythm } from '../../utils/typography'
import { Flex, Box } from 'reflexbox';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <Headroom
        wrapperStyle={{
          marginBottom: rhythm(1),
        }}
      >
        <div className="topNav">
          <Box className="logo"> <Logo /> </Box>
          <Box className="topNav-separator" flexAuto />
          <Flex>
            <Box px={1}> <NavLink to="/blog/">Blog</NavLink> </Box>
            <Box px={1}> <NavLink to="/about/"> About </NavLink> </Box>
            <Box px={1}> <NavLink to="/now/">Now</NavLink> </Box>
            <Box px={1}> <NavLink to="/life/">Life</NavLink> </Box>
          </Flex>
        </div>
      </Headroom>
    );
  }
}
export default NavBar;
