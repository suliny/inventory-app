import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Inventory from '../screens/Inventory';
import AddItem from '../screens/AddItem';
import InventoryDetail from '../screens/InventoryDetail';
import Me from '../screens/Me';

export const InventoryStack = StackNavigator({
  Inventory: {
    screen: Inventory,
  },
  Details: {
    screen: InventoryDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
  }
});

export const Tabs = TabNavigator({
  Inventory: {
    screen: InventoryStack,
    navigationOptions: {
      tabBarLabel: 'Inventory',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const AddItemStack = StackNavigator({
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      title: 'Add Item',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  AddItem: {
    screen: AddItemStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
