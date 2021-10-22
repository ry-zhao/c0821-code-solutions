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
        {this.props.entries.map(entry => (
          <div className="entry" key={entry.topic}>
            <h3 className="topic" entry={this.props.entries.indexOf(entry)}>{entry.topic}</h3>
            <div className="details hidden">{entry.details}</div>
          </div>
        ))}
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
    event.target.nextSibling.className = 'details';
  }

  closeEntry(event) {
    document.querySelector(`h3[entry="${this.state.currentEntry}"]`).nextSibling.className = 'details hidden';
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
