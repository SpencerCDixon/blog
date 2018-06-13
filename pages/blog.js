import React from 'react';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import PostLink from 'components/PostLink';
import { rhythm } from 'utils/typography';
import access from 'safe-access';
import { include as includes } from 'underscore.string';
import { Flex, Box } from 'reflexbox';
import { colors, fonts } from 'css';

function sortByDate(posts) {
  return sortBy(posts, post => access(post, 'data.date')).reverse();
}

const BlogIndex = props => {
  const pageLinks = [];
  let body;
  let title;
  const blogPosts = filter(
    props.route.pages,
    page => includes(page.data.layout, 'post') && !page.data.draft,
  );
  const sortedPages = sortByDate(blogPosts);

  sortedPages.forEach(page => {
    if (access(page, 'file.ext') === 'md') {
      title = access(page, 'data.title') || page.path;

      pageLinks.push(
        <li
          key={page.path}
          style={{
            margin: '32px 0',
          }}>
          <PostLink {...page} title={title} />
        </li>,
      );
    }
  });

  return (
    <Flex flexColumn align="center">
      <h1 className="fade-in">Blog Posts</h1>
      <ul
        style={{
          listStyleType: 'none',
          marginTop: rhythm(1),
          marginLeft: 0,
        }}>
        {pageLinks}
      </ul>
    </Flex>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;
