import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentEntry: '-1' };
    this.handleClick = this.handleClick.bind(this);
    this.openEntry = this.openEntry.bind(this);
    this.closeEntry = this.closeEntry.bind(this);
  }

  render() {
    return (
      <div className="accordion-frame" onClick={this.handleClick}>
        {this.props.entries.map((entry, index) => {
          let details = '';
          if (index === Number(this.state.currentEntry)) {
            details = <div className="details">{entry.details}</div>;
          }
          return (
            <div className="entry" key={index}>
              <h3 className="topic" entry={index}>{entry.topic}</h3>
              {details}
            </div>
          );
        })}
      </div>
    );
  }

  handleClick(event) {
    if (event.target.className !== 'topic') {
      return;
    }
    if (this.state.currentEntry === '-1') {
      this.openEntry(event);
    } else {
      this.closeEntry(event);
    }
  }

  openEntry(event) {
    this.setState(prevState => ({
      currentEntry: event.target.getAttribute('entry')
    }));
  }

  closeEntry(event) {
    if (event.target.getAttribute('entry') !== this.state.currentEntry) {
      this.openEntry(event);
    } else {
      this.setState(prevState => ({
        currentEntry: '-1'
      }));
    }
  }
}

export { Accordion as default };
