import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { green } from './src/common/Colors';
import Router from './src/navigation/Router';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      {/* {token ? <Home /> : <Login setToken={setToken} />} */}
      <Router />
      <StatusBar
        style='auto'
        backgroundColor={green}
        barStyle='light-content'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
