import React from 'react';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={this.handleChange} value={this.state.value}></input>
        <button>Sign Up</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState(prevState => (
      { value: event.target.value }
    ));
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
}

export { NewsletterForm as default };
