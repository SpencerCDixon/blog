import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import Cover from './course/optimized.png';
import css from './book.module.scss';
import MailchimpForm from 'components/MailchimpForm';

function BookIndex({  }) {
  return (
    <div>
      <Flex flexColumn align="center">
        <h1 className="fade-in">Building A React UI Kit</h1>
        <div>
          <img src={Cover} className={css.cover} />
        </div>

        <Box my={2}>
          <h3>Get notified of any book updates and the release date!</h3>
          <MailchimpForm inline id="083ecb7290" />
        </Box>

        <Box my={2}>
          <h1>What will you learn:</h1>
          <ul>
            <li>How to publish React components to npm</li>
            <li>How to take advantage of the yarn package manager</li>
            <li>How to theme your react components</li>
            <li>How to self document your react components</li>
            <li>Tips for creating easy and fun to use prop APIs</li>
            <li>Much, much more! :-)</li>
          </ul>
        </Box>
      </Flex>
    </div>
  );
}

BookIndex.propTypes = {
};
export default BookIndex;
