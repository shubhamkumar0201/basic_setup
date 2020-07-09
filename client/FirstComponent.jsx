import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class FirstComponent extends Component {
    render() {
        return (
            <div>
              <h1>Jo karanasdadaa hai karo</h1>
            </div> 
        )
    }
}

export default hot(module)(FirstComponent);