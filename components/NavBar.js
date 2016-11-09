import React, { PropTypes } from 'react';
import Headroom from 'react-headroom'
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import { rhythm } from '../utils/typography'
import { Flex, Box } from 'reflexbox';

function NavBar() {
  return (
    <Headroom
      wrapperStyle={{
        marginBottom: rhythm(1),
      }}
    >
      <Flex py={3} px={4} wrap justify="center">
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
  );
}

NavBar.propTypes = {
};
export default NavBar;
