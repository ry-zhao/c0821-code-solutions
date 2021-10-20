import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };
    this.incrementTimesClicked = this.incrementTimesClicked.bind(this);
  }

  render() {
    const { timesClicked } = this.state;
    let heat;
    if (timesClicked < 3) {
      heat = 'cold';
    } else if (timesClicked < 6) {
      heat = 'cool';
    } else if (timesClicked < 9) {
      heat = 'lukewarm';
    } else if (timesClicked < 12) {
      heat = 'warm';
    } else if (timesClicked < 15) {
      heat = 'hot';
    } else {
      return <button className='hot-button burning'>Hot Button</button>;
    }
    return (
    <button className={`hot-button ${heat}`} onClick={this.incrementTimesClicked}>
      Hot Button
    </button>);
  }

  incrementTimesClicked() {
    this.setState(prevState => ({
      timesClicked: ++prevState.timesClicked
    }));
  }
}

export { HotButton as default };
