import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Foundation
        name={this.props.name}
        size={ this.props.isPremier ? 34 : 26 }
        style={{marginBottom: (this.props.isPremier ? 0 : -4 )}}
        color={ this.props.isPremier ? '#ffcb43' : (this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault) }
      />
    );
  }
}
