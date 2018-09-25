import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PremierScreen from '../screens/PremierScreen';
import FollowingScreen from '../screens/FollowingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
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

const PremierStack = createStackNavigator({
  Premier: PremierScreen
})

PremierStack.navigationOptions = {
  tabBarLabel: ({focused}) => (
    <TabBarLabel
      title='Premier'
      focused={focused}
      isPremier={true}
    />
  ),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      isPremier={true}
      name='crown'
    />
  )
}

const FollowingStack = createStackNavigator({
  Following: FollowingScreen
})

FollowingStack.navigationOptions = {
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
  PremierStack,
  FollowingStack,
  ProfileStack,
}, tabBarOptions)