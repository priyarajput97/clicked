import React from 'react';
import { Text, View } from 'react-native';
import { white } from '../common/Colors';

const Feeds = () => {
  return (
    <View
      style={{
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Feeds page</Text>
    </View>
  );
};

export default Feeds;
