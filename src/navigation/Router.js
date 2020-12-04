import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MyDrawer from './MyDrawer';
import Constants from 'expo-constants';
import { green, white } from '../../common/Colors';
import { deviceWidth } from '../../common/Dimensions';

function Router() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
      <StatusBar style='light' backgroundColor={green} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    marginTop: Constants.statusBarHeight,
    backgroundColor: white,
  },
});

export default Router;
