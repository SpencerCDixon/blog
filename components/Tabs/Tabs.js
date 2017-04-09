import React, { Children } from 'react';

class Tabs extends Component {
  state = { selected: 0 }

  handleClick = selected => this.setState({selected})

  render() {
    return Children(this.props.children, (child, i) => {
      return (
        <div onClick={this.handleClick.bind(this, i)}>
          {child}
        </div>
      );
    });
  }
}
