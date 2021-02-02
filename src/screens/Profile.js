import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { green, white } from '../common/Colors';
import user from '../assets/user.jpg';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={user} style={styles.userImage} />
        <Text style={styles.userName}>Jane Doe</Text>
        <Button color={green} title='Log out' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  userContainer: {
    alignItems: 'center',
    padding: 30,
  },
  userImage: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  userName: {
    fontSize: 30,
    color: green,
    margin: 20,
  },
});

export default Profile;
