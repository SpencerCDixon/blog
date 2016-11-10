import React, { Component } from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import Tags from 'components/Tags';
import ReactDisqusThread from 'react-disqus-thread';
import Button from 'components/Button';
import { Flex, Box } from 'reflexbox';

export default class MDWrapper extends Component {
  state = {
    isShowingComments: false
  }

  handleToggleComments = () => {
    this.setState({isShowingComments: !this.state.isShowingComments});
  }

  render () {
    const post = this.props.route.page.data
    const tags = post.tags ? post.tags.split(',') : [];
    const buttonText = this.state.isShowingComments ? 'Hide Comments' : 'Show Comments';

    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Tags tags={tags} />

        <Flex mt={2} justify="center">
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
