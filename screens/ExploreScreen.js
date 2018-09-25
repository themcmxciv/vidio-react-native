import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Explore',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> ExploreScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
