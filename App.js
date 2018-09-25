import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Icon, Constants } from 'expo';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  _loadResourcesAsync = () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font
      })
    ]);
  }

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          { Platform.OS === 'ios' && <StatusBar barStyle='default'/> }
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    backgroundColor: "#111",
    height: Constants.statusBarHeight,
  },
});
