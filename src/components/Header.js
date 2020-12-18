import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import textLogo from '../assets/textLogo.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { green } from '../common/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={textLogo} style={styles.logo} />
      <AntDesign name='search1' color={green} size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 70,
    width: 150,
  },
});

export default Header;
