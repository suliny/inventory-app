import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { inventory } from '../config/data';

class Feed extends Component {
  onLearnMore = (item) => {
    this.props.navigation.navigate('Details', { ...item });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {inventory.map((item, index) => (
            <ListItem
              key={index}
              avatar={{ uri: item.picture.thumbnail }}
              title={`${item.title}`}
              subtitle={item.location2}
              onPress={() => this.onLearnMore(item)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
