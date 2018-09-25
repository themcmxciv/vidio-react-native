import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Foundation
        name={this.props.name}
        size={26}
        style={{marginBottom: -4,}}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
