import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          currentGif: ''
        }
    }

    render() {
        // Show the button to start with
        return <SurpriseButton />;
  
    }
}
