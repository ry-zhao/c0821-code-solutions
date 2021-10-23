import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

const element = <Carousel images={['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png']} />;

ReactDOM.render(element, document.getElementById('root'));
