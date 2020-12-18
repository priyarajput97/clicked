import React from 'react';
import { Text, View } from 'react-native';
import { white } from '../common/Colors';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Profile page</Text>
    </View>
  );
};

export default Profile;
