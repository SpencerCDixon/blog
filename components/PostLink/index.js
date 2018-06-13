import React from 'react';
import Card from 'components/Card';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import ReadTime from 'react-read-time';
import Date from 'components/Date';
import { colors, fonts } from 'css';
import { Flex, Box } from 'reflexbox';
import Tags from 'components/Tags';

function PostLink({ path, data: { tags, date, body }, title }) {
  const finalTags = tags ? tags.split(',') : [];

  return (
    <Link to={prefixLink(path)}>
      <Card flexColumn>
        <h3 style={{ marginBottom: 0 }}>{title}</h3>
        <Box my={2}>
          <Date time={date} />
          <span style={{ color: 'black', margin: '0 5px', paddingTop: 5 }}>
            •
          </span>
          <ReadTime
            content={body}
            style={{
              color: colors.lightGray,
              fontSize: fonts.small,
            }}
          />
        </Box>
        <Box>
          <Tags tags={finalTags} />
        </Box>
      </Card>
    </Link>
  );
}

export default PostLink;
