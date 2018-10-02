import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'button'
    };
  }

  showImage() {
    this.setState({
      display: 'image'
    });
  }

  render() {
    // Show the button to start with
    if (this.state.display === 'button') {
      return <SurpriseButton onClick={e => this.showImage()} />;
    } else {
      return <SurpriseImage />;
    }
  }
}
