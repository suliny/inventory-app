import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { inventory } from '../config/data';

// https://github.com/react-community/react-navigation/issues/145
class Inventory extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Inventory',
      headerRight: (
        <Button
          buttonStyle={{paddingRight: 3, backgroundColor: '#ccc'}}
          icon={{name: 'add'}}
          onPress={() => params.handleAddItem()}
        />
      )
    };
  };

  // Only needed because we want to use line 38 where the "this" context is
  // not available otherwise
  componentDidMount() {
    this.props.navigation.setParams({ handleAddItem: this.handleAddItemPress });
  }

  // Top right header click
  handleAddItemPress = () => {
    this.props.navigation.navigate('AddItem');
  }

  // Individual row item click
  handleSeeMoreDetails = (item) => {
    this.props.navigation.navigate('Details', { ...item });
  };


  render() {
    let items = inventory

    return (
      <ScrollView>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              avatar={{ uri: item.picture.thumbnail }}
              title={`${item.title}`}
              subtitle={item.location2}
              onPress={() => this.handleSeeMoreDetails(item)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Inventory;
