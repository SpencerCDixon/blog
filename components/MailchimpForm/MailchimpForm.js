import React, { Component, PropTypes } from 'react';
import Avatar from 'components/Avatar';
import CTAButton from 'components/CTAButton';
import Spencer from './coder-spencer.jpg';
import css from './MailchimpForm.module.scss';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';

const propTypes = {
  inline: PropTypes.bool.isRequired,
};
const defaultProps = {
  inline: false,
}

class MailchimpForm extends Component {
  state = {
    name: '',
    email: '',
  }

  updateName = (e, name) => { this.setState({name}); }
  updateEmail = (e, email) => { this.setState({email}); }

  render() {
    if (this.props.inline) {
      return (
        <Flex>
          <form 
            action="//spencerdixon.us11.list-manage.com/subscribe/post?u=019dc2164dbdc16d844cf6dc2&amp;id=666e212a4d" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className={css.form}
            style={{width: '100%'}}
            target="_blank" 
            noValidate
          >
            <Flex id="mc_embed_signup_scroll" style={{width: '100%'}} wrap justify="center">
              <Box my={1} className="mc-field-group">
                <input 
                  type="email" 
                  onChange={this.updateEmail} 
                  value={this.state.email} 
                  name="EMAIL" 
                  className={css.input}
                  id="mce-EMAIL" 
                  placeholder="your@email.com"
                />
              </Box>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
              </div>

              <div style={{position: 'absolute', left: -5000}}>
                <input type="text" name="b_019dc2164dbdc16d844cf6dc2_666e212a4d" tabIndex="-1" value="" />
              </div>

              <Box flex align="center" ml={2}>
                <CTAButton id="mc-embedded-subscribe">
                  Subscribe
                </CTAButton>
              </Box>
            </Flex>
          </form>
        </Flex>
      );
    }

    return (
      <Flex className={css.container} justify="space-around" wrap>
        <Box flex align="center" mr={2}>
          <Avatar 
            src={Spencer} 
            alt="Spencer" 
            imageStyle={{maxWidth: 120}}
          />
        </Box>
        <Flex id="mc_embed_signup" flexColumn align="center" order={1}>
          <h4>Want More? Get fresh articles, screencasts, and tutorials sent to your inbox.</h4>
          <form 
            action="//spencerdixon.us11.list-manage.com/subscribe/post?u=019dc2164dbdc16d844cf6dc2&amp;id=666e212a4d" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className={css.form}
            style={{width: '100%'}}
            target="_blank" 
            noValidate
          >
            <Flex flexColumn id="mc_embed_signup_scroll" style={{width: '100%'}} justify="center">
              <Box my={1} className="mc-field-group" style={{width: '100%'}}>
                <input 
                  type="text" 
                  onChange={this.updateName} 
                  value={this.state.name} 
                  name="FNAME" 
                  className={css.input}
                  id="mce-FNAME" 
                  placeholder="First name"
                />
              </Box>

              <Box my={1} className="mc-field-group">
                <input 
                  type="email" 
                  onChange={this.updateEmail} 
                  value={this.state.email} 
                  name="EMAIL" 
                  className={css.input}
                  id="mce-EMAIL" 
                  placeholder="your@email.com"
                />
              </Box>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
              </div>

              <div style={{position: 'absolute', left: -5000}}>
                <input type="text" name="b_019dc2164dbdc16d844cf6dc2_666e212a4d" tabIndex="-1" value="" />
              </div>

              <Box flex justify="flex-end" my={1}>
                <CTAButton id="mc-embedded-subscribe">
                  Subscribe
                </CTAButton>
              </Box>
            </Flex>
          </form>
        </Flex>
      </Flex>
    );
  }
}

MailchimpForm.propTypes = propTypes;
MailchimpForm.defaultProps = defaultProps;
export default MailchimpForm;
