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
  id: '666e212a4d',
};

class MailchimpForm extends Component {
  state = {
    name: '',
    email: '',
  };

  updateName = (e, name) => {
    this.setState({ name });
  };
  updateEmail = (e, email) => {
    this.setState({ email });
  };

  render() {
    const { id } = this.props;

    return (
      <Flex style={{ width: '100%' }} flexColumn justify="space-around">
        <div className={css.separator} />

        <h2>Can I be honest? I want your email.</h2>
        <p>
          I <strong>love</strong> teaching and writing new content but sometimes
          find it hard to justify.
        </p>

        <p>
          Getting your email motivates me to spend more time creating awesome
          content and notifies you when new posts or screencasts come out.
        </p>

        <p>
          I will <strong>never</strong> share your email or spam. Expect less
          than 5 emails a year and feel free to unsubscribe at any time.
        </p>

        <Flex id="mc_embed_signup" flexColumn align="center" order={1}>
          <form
            action={`//spencerdixon.us11.list-manage.com/subscribe/post?u=019dc2164dbdc16d844cf6dc2&amp;id=${id}`}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className={css.form}
            style={{ width: '100%' }}
            target="_blank"
            noValidate>
            <Flex
              flexColumn
              id="mc_embed_signup_scroll"
              style={{ width: '100%' }}
              justify="center">
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
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                />
              </div>

              <div style={{ position: 'absolute', left: -5000 }}>
                <input
                  type="text"
                  name={`b_019dc2164dbdc16d844cf6dc2_${id}`}
                  tabIndex="-1"
                  value=""
                />
              </div>

              <Box flex justify="flex-end" my={1}>
                <CTAButton id="mc-embedded-subscribe">
                  Keep Spencer Motivated
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
