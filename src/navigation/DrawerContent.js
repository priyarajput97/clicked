import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { green, white } from '../common/Colors';

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContent}>
      <Drawer.Section>
        <View style={styles.drawerHeader}>
          <MaterialCommunityIcons
            name='account-circle'
            color={white}
            size={50}
          />
          <Text style={styles.username}>Priya</Text>
        </View>
      </Drawer.Section>

      <Drawer.Section>
        <DrawerItem
          label='Home'
          icon={() => (
            <MaterialCommunityIcons name='home' color={green} size={25} />
          )}
          onPress={() => props.navigation.navigate('Home')}
        />
      </Drawer.Section>

      <Drawer.Section style={styles.bottomDrawerContent}>
        <DrawerItem
          label='Sign Out'
          icon={() => (
            <MaterialCommunityIcons
              name='exit-to-app'
              color={green}
              size={25}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: green,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 30,
    fontWeight: '500',
    color: white,
    marginLeft: 10,
    marginBottom: 0,
  },
  role: {
    color: white,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: white,
  },
  bottomDrawerContent: {
    marginTop: 'auto',
    borderTopColor: white,
    borderTopWidth: 1,
  },
});

export default DrawerContent;
