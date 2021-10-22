import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentEntry: '-1' };
    this.openEntry = this.openEntry.bind(this);
  }

  render() {
    return (
      <div className="accordion-frame" onClick={this.openEntry}>
        <div className="entry">
          <h3 className="topic" key="0">Hypertext Markup Language</h3>
          <div className="details hidden">Bitch I'm an accordion</div>
        </div>
      </div>
    );
  }

  openEntry(event) {
    if (event.target.className !== 'topic') {
      return;
    }
    // this.setState(prevState => ({
    //   currentEntry: event.target.props.key
    // }));
    console.log(event.target.props);
    event.target.nextSibling.className = 'details';
  }
}

export { Accordion as default };
