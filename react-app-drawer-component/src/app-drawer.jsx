import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.selectGame = this.selectGame.bind(this);
  }

  render() {
    let drawerState;
    let overlayState;
    if (this.state.isOpen) {
      drawerState = 'open';
      overlayState = '';
    } else {
      drawerState = 'closed';
      overlayState = 'hidden';
    }
    return (
      <>
        <i className="fas fa-bars hamburger-button" onClick={this.openDrawer}></i>
        <div className={`drawer ${drawerState}`} onClick={this.selectGame}>
          <h3>Choose a Game</h3>
          <div className="game">The Legend of Zelda</div>
          <div className="game">A Link to the Past</div>
          <div className="game">Ocarina of Time</div>
          <div className="game">The Wind Waker</div>
          <div className="game">Breath of the Wild</div>
        </div>
        <div className={`overlay ${overlayState}`} onClick={this.closeDrawer}></div>
      </>
    );
  }

  openDrawer(event) {
    this.setState(prevState => ({
      isOpen: true
    }));
  }

  closeDrawer(event) {
    this.setState(prevState => ({
      isOpen: false
    }));
  }

  selectGame(event) {
    if (event.target.className !== 'game') {
      return;
    }
    this.closeDrawer();
  }
}

export { AppDrawer as default };
