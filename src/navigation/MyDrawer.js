import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import DrawerContent from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableRipple } from 'react-native-paper';
import { green, white } from '../../common/Colors';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: green,
  },
  headerTintColor: white,
};

const headerMenuIcon = (navigation) => (
  <TouchableRipple
    onPress={() => navigation.openDrawer()}
    style={{ padding: 10 }}
  >
    <Entypo name='menu' color={white} size={25} backgroundColor={green} />
  </TouchableRipple>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen
      name='Home'
      component={Home}
      options={{
        headerLeft: () => headerMenuIcon(navigation),
      }}
    />
  </HomeStack.Navigator>
);

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
