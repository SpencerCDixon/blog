import React, { Component } from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import NavBar from '../components/NavBar';
import 'css/markdown-styles'
import 'css/headroom'

import { rhythm } from '../utils/typography'

export default class MainLayout extends Component { 
  render () {
    return (
      <div>
        <NavBar />
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
  }
}
