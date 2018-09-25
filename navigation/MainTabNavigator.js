import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import FollowingScreen from '../screens/FollowingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  title: 'Home',
  tabBarLabel: ({focused}) => (
    <TabBarLabel
      title='Home'
      focused={focused}
    />
  ),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  )
}

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
})

ExploreStack.navigationOptions = {
  title: 'Explore',
  tabBarLabel: ({focused}) => (
    <TabBarLabel
      title='Explore'
      focused={focused}
    />
  ),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  )
}

const FollowingStack = createStackNavigator({
  Following: FollowingScreen
})

FollowingStack.navigationOptions = {
  headerTitle: 'Following',
  tabBarLabel: ({focused}) => (
    <TabBarLabel
      title='Following'
      focused={focused}
    />
  ),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-play${focused ? '' : '-outline'}`
          : 'md-play'
      }
    />
  )
}

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
})

ProfileStack.navigationOptions = {
  title: 'Profile',
  tabBarLabel: ({focused}) => (
    <TabBarLabel
      title='Profile'
      focused={focused}
    />
  ),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  FollowingStack,
  ProfileStack,
})