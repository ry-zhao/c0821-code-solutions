import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>Click Me!</button>;
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: true
    }));
  }
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
