import React, { Component } from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import Tags from 'components/Tags';
import ReactDisqusThread from 'react-disqus-thread';
import Button from 'components/Button';
import Date from 'components/Date';
import ReadTime from 'react-read-time';
import { Flex, Box } from 'reflexbox';
import { colors, fonts } from 'css';
import MailchimpForm from 'components/MailchimpForm';
import ShareIcons from 'components/ShareIcons';

export default class MDWrapper extends Component {
  state = {
    isShowingComments: false
  }

  handleToggleComments = () => {
    this.setState({isShowingComments: !this.state.isShowingComments});
  }

  render () {
    const post = this.props.route.page.data
    const { title, desc, tags } = post;
    const finalTags = tags ? tags.split(',') : [];
    const buttonText = this.state.isShowingComments ? 'Hide Comments' : 'Show Comments';

    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1 style={{
          marginBottom: 0,
          fontFamily: fonts.tertiary,
          fontWeight: fonts.xThin,
        }}>
          {post.title}
        </h1>

        <Flex mt={1} mb={3}>
          <Box mr={1}>
            <Date time={post.date} />
          </Box>
          <Box>
            <ReadTime content={post.body} style={{
              color: colors.lightGray, 
              fontSize: fonts.small
            }} />
          </Box>
        </Flex>

        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Tags tags={finalTags} />

        <Flex mt={3}>
          <MailchimpForm />
        </Flex>

        <Flex mt={3} justify="center">
          <ShareIcons title={title} desc={desc} url={location.href} />
        </Flex>

        <Flex mt={3} justify="center">
          <Button onClick={this.handleToggleComments}>
            {buttonText}
          </Button>
        </Flex>

        {this.state.isShowingComments && 
          <ReactDisqusThread
            shortname="spencerdixon"
            identifier={post.title}
            title={post.title}
            url={`http://spencerdixon.com${post.path}`}
          />
        }
      </div>
    )
  }
}
