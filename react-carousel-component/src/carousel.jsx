import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.rotateImages = this.rotateImages.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.shiftImage = this.shiftImage.bind(this);
    this.state = {
      currentImage: 0,
      interval: 0
    };
  }

  render() {
    const current = Number(this.state.currentImage);
    // for (let i = 0; i < this.props.images.length; i++) {
    // if (i === current) {
    //   buttons.push(<div className="button current" key={i} data-index={i} />);
    // } else {
    //   buttons.push(<div className="button" key={i} data-index={i} />);
    // }
    // }
    const buttons = this.props.images.map((image, index) => {
      if (index === current) {
        return (<div className="button current" key={index} data-index={index} />);
      } else {
        return (<div className="button" key={index} data-index={index} />);
      }
    });
    const image = <img src={this.props.images[current]} />;
    return (
      <div className="box" onClick={this.shiftImage}>
        <div className="col-one-twelfth">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="col-ten-twelfths">
          <div className="image-container">
            {image}
          </div>
          <div className="button-container" onClick={this.changeImage}>
            {buttons}
          </div>
        </div>
        <div className="col-one-twelfth">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState(prevState => ({
      interval: setInterval(this.rotateImages, 3000)
    }));
  }

  rotateImages() {
    if (this.state.currentImage === this.props.images.length - 1) {
      this.setState(prevState => ({
        currentImage: 0
      }));
    } else {
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1
      }));
    }
  }

  changeImage(event) {
    if (!event.target.matches('.button')) {
      return;
    }
    clearInterval(this.state.interval);
    this.setState(prevState => ({
      currentImage: Number(event.target.dataset.index),
      interval: setInterval(this.rotateImages, 3000)
    }));
  }

  shiftImage(event) {
    if (!event.target.matches('.fas')) {
      return;
    }
    if (event.target.matches('.fa-chevron-left')) {
      this.lastImage(event);
    } else {
      this.nextImage(event);
    }
  }

  lastImage(event) {
    if (this.state.currentImage === 0) {
      clearInterval(this.state.interval);
      this.setState(prevState => ({
        currentImage: this.props.images.length - 1,
        interval: setInterval(this.rotateImages, 3000)
      }));
    } else {
      clearInterval(this.state.interval);
      this.setState(prevState => ({
        currentImage: prevState.currentImage - 1,
        interval: setInterval(this.rotateImages, 3000)
      }));
    }
  }

  nextImage(event) {
    if (this.state.currentImage === this.props.images.length - 1) {
      clearInterval(this.state.interval);
      this.setState(prevState => ({
        currentImage: 0,
        interval: setInterval(this.rotateImages, 3000)
      }));
    } else {
      clearInterval(this.state.interval);
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1,
        interval: setInterval(this.rotateImages, 3000)
      }));
    }
  }
}

export { Carousel as default };
