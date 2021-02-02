import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { green } from './src/common/Colors';
import Router from './src/navigation/Router';
import AuthRouter from './src/navigation/AuthRouter';

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      {token ? <Router /> : <AuthRouter setToken={setToken} />}
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
