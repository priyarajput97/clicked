import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { green } from '../../common/Colors';
import { deviceWidth } from '../../common/Dimensions';
import textLogo from '../assets/textLogo.png';

const Login = ({ setToken }) => {
  return (
    <View style={styles.container}>
      <Image source={textLogo} style={styles.logo} />
      <Button title='Login' color={green} onPress={() => setToken('test')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: deviceWidth - 60,
    marginBottom: 60,
  },
});

export default Login;
