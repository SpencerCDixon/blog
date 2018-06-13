import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import Tag from './Tag';

function Tags({ tags }) {
  return (
    <Flex>
      {tags.map((tag, i) => {
        if (i === 0) {
          return (
            <Box mr={1} key={tag}>
              <Tag> {tag} </Tag>
            </Box>
          );
        } else {
          return (
            <Box mx={1} key={tag}>
              <Tag> {tag} </Tag>
            </Box>
          );
        }
      })}
    </Flex>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
};
export default Tags;
