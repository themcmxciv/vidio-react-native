import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Text
        style={[styles.tabBarLabel, this.props.focused ? styles.tabBarLabelActive : {}]}
      > {this.props.title} </Text>
    );
  }
}

const styles = StyleSheet.create({
  tabBarLabel: {
    marginBottom: 6,
    fontSize: 10,
    textAlign: 'center',
    color: '#111'
  },
  tabBarLabelActive: {
    color: Colors.tintColor
  }
});
