import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Text
        style={[styles.tabBarLabel, this.props.focused ? ( this.props.isPremier ? styles.tabBarLabelActivePremier : styles.tabBarLabelActive) : {}]}
      > {this.props.title} </Text>
    );
  }
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#111',
    marginBottom: 3,
  },
  tabBarLabelActive: {
    color: Colors.tintColor
  },
  tabBarLabelActivePremier: {
    color: '#ffcb43'
  }
});
