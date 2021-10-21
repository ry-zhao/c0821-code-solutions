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
    let status;
    if (this.state.isOn) {
      status = 'on';
    } else {
      status = 'off';
    }
    return (
      <div className="row">
        <div className={`container ${status}`} onClick={this.toggle}>
          <div className={`switch ${status}`}></div>
        </div>
        <div className="label">
          {status.toUpperCase()}
        </div>
      </div>
    );
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
