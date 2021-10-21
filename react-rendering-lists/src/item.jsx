import React from 'react';

class Item extends React.Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

export { Item as default };
