import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
  }

  // REMEBER TO ENSURE THAT REACT CONTROLS THE INPUT
  render() {
    let iconClass;
    if (this.state.valid) {
      iconClass = 'check green';
    } else {
      iconClass = 'times red';
    }
    return (
      <form>
        <label className="mar-b-p25rem" htmlFor="password">Password</label>
        <input className="mar-r-p5rem" type="password" id="password"></input>
        <i className={`fas fa-${iconClass}`}></i>
      </form>
    );
  }
}

export { ValidatedInput as default };
