import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    const { isOn } = this.state;
    if (isOn) {
      return (
        <div className="container on" onClick={this.toggle}>
        <div className="switch on"></div>
      </div>);
    }
    return (
      <div className="container off" onClick={this.toggle}>
        <div className="switch off"></div>
      </div>);
  }

  toggle() {
    this.setState(prevState => {
      if (prevState.isOn) {
        return { isOn: false };
      }
      return { isOn: true };
    });
  }
}

export { ToggleSwitch as default };
