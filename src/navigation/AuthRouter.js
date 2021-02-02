import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { white } from '../common/Colors';
import { deviceWidth } from '../common/Dimensions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

function AuthRouter() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
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

export default AuthRouter;
