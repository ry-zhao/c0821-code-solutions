import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      value: ''
    };
  }

  render() {
    let iconClass;
    let errorMessage;
    if (this.state.value === '') {
      iconClass = 'times red';
      errorMessage = <div className="error red">A password is required.</div>;
    } else if (this.state.value.length < 8) {
      iconClass = 'times red';
      errorMessage = <div className="error red">Your password is too short.</div>;
    } else {
      const capitals = /[A-Z]/;
      const numericChars = /[0-9]/;
      const specialChars = /[!@#$%^&*()]/;
      if (capitals.test(this.state.value) && numericChars.test(this.state.value) && specialChars.test(this.state.value)) {
        iconClass = 'check green';
      } else {
        iconClass = 'times red';
        errorMessage = <div className="error red">Your password must contain a numeric character, a capital letter, and a special character.</div>;
      }
    }

    return (
      <form>
        <label className="mar-b-p25rem" htmlFor="password">Password</label>
        <input className="mar-r-p5rem" type="password" id="password" value={this.state.value} onChange={this.updateValue}>

        </input>
        <i className={`fas fa-${iconClass}`}></i>
        {errorMessage}
      </form>
    );
  }

  updateValue(event) {
    this.setState(prevState => ({
      value: event.target.value
    }));
  }
}

export { ValidatedInput as default };
