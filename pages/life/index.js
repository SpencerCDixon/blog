import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Flex, Box } from 'reflexbox';
import { getBooks } from '../../utils/roots';

class Life extends Component {
  state = { books: [] }

  componentDidMount() {
    getBooks().then(books => {
      this.setState({books})
    });
  }

  render() {
    return (
      <Flex flexColumn>
        <Helmet title="Spencer Dixon | Life" />
        <h1> Books </h1>
        <ul>
          {this.state.books.map(b => {
            return <li>{b.title}</li>
          })}
        </ul>
      </Flex>
    );
  }
}
export default Life;
