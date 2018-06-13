import React from 'react';
import Avatar from 'components/Avatar';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Flex, Box } from 'reflexbox';
import { fonts } from 'css';
import SocialIcons from 'components/SocialIcons';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              name: 'description',
              content: 'Spencer Dixon - A blog about programming and life.',
            },
            {
              name: 'keywords',
              content: 'Programming, blog, lifestyle design, React, Redux',
            },
          ]}
        />
        <Flex flexColumn style={{ maxWidth: 700 }} mx="auto">
          <Flex mb={4} flexColumn align="center">
            <Avatar
              src="https://avatars2.githubusercontent.com/u/7471018?s=460&v=4"
              alt="Spencer Dixon"
            />
            <SocialIcons />
          </Flex>

          <h1 className="fade-in" style={{ fontSize: '3em' }}>
            Fancy seeing you here...
          </h1>

          <p
            style={{
              fontSize: '1.1em',
              lineHeight: '1.8em',
              textAlign: 'left',
            }}>
            Welcome to my bubble on the internet 😄. Learn more{' '}
            <strong>
              <Link to="/about/">about me here</Link>{' '}
            </strong>{' '}
            or if you're a developer you should{' '}
            <strong>
              <a href="https://tuple.app" target="_blank">
                check out my latest project Tuple, a Screenhero replacement.
              </a>
            </strong>
          </p>
        </Flex>
      </div>
    );
  }
}
