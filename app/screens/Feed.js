import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { inventory } from '../config/data';

class Feed extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Inventory',
      headerRight: (
        <Button
          buttonStyle={{paddingRight: 3, backgroundColor: '#ccc'}}
          icon={{name: 'add'}}
          onPress={() => params.handleSave()}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.handleAddItemPress = this.handleAddItemPress.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.handleAddItemPress });
  }

  handleSeeMoreDetails = (item) => {
    this.props.navigation.navigate('Details', { ...item });
  };

  handleAddItemPress = () => {
    this.props.navigation.navigate('AddItem');
  }

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

export default Feed;
