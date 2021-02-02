import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { green, lightGreen } from '../common/Colors';
import { deviceWidth } from '../common/Dimensions';

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Enter your email' />
      <TextInput
        style={styles.textInput}
        placeholder='Enter your password'
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Confirm your password'
        secureTextEntry={true}
      />
      <Button title='Register' color={green} />

      <View style={{ flexDirection: 'row', marginTop: 100 }}>
        <Text style={{ fontSize: 15 }}>Already a user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: deviceWidth - 60,
    borderBottomColor: lightGreen,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  registerLink: {
    fontSize: 15,
    color: green,
    textDecorationLine: 'underline',
    textDecorationColor: green,
    marginLeft: 5,
  },
});

export default Register;
