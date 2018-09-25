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
      name='home'
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
      name='magnifying-glass'
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
      name='play-video'
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
      name='torso'
    />
  )
}

const tabBarOptions = {
  tabBarOptions: {
    tabStyle: {
      height: 48,
    }
  }
}

export default createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  FollowingStack,
  ProfileStack,
}, tabBarOptions)