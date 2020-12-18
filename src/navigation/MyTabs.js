import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Feeds from '../screens/Feeds';
import { green, offWhite, white } from '../common/Colors';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      activeColor={white}
      inactiveColor={offWhite}
      barStyle={{ backgroundColor: green }}
    >
      <Tab.Screen name='Feed' component={Feeds} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default MyTabs;
