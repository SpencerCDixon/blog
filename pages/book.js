import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import Cover from './course/optimized.png';
import css from './book.module.scss';

function BookIndex({  }) {
  return (
    <Flex flexColumn align="center">
      <h1 className="fade-in">Building A React UI Kit</h1>
      <div>
        <img src={Cover} className={css.cover} />
      </div>
    </Flex>
  );
}

BookIndex.propTypes = {
};
export default BookIndex;
