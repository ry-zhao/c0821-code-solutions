import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0, isTicking: false, interval: 0 };
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.interval = 0;
  }

  render() {
    let button;
    if (this.state.isTicking) {
      button = <i className="fas fa-pause" onClick={this.stop}></i>;
    } else {
      button = <i className="fas fa-play" onClick={this.start}></i>;
    }
    return (
      <div className="row">
        <div className="col">
          <div className="row jc-center">
            <div className="watch" onClick={this.reset}>
              {this.state.secondsElapsed}
            </div>
          </div>
          <div className="row jc-center margin-top-1rem">
            {button}
          </div>
        </div>
      </div>
    );
  }

  tick() {
    this.setState(prevState => ({
      secondsElapsed: ++prevState.secondsElapsed
    }));
  }

  start() {
    this.setState(prevState => ({
      isTicking: true,
      interval: setInterval(this.tick, 1000)
    }));
  }

  stop() {
    clearInterval(this.state.interval);
    this.setState(prevState => ({
      isTicking: false,
      interval: 0
    }));
  }

  reset() {
    if (this.state.isTicking) {
      return;
    }
    this.setState(prevState => ({
      secondsElapsed: 0
    }));
  }
}

export { Stopwatch as default };
