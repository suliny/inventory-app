import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class InventoryDetail extends Component {
  render() {
    const { picture, title, email, phone, login, dob, location, location2, lastUpdated, mapScreenshot } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
        // don't need title showing on image
        //  title={`${title}`}
        //    caption={email}
        />

        <List>
          <ListItem
            titleStyle = {styles.bigTitle}
            title={`${title}`}
            titleContainerStyle = {styles.titleContainer}
            hideChevron
          />
        </List>
        <List>
          <ListItem
            title="Location:"
            rightTitle={location2}
            rightTitleStyle={styles.listText}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Last Updated:"
            rightTitle={lastUpdated}
            rightTitleStyle={styles.listText}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Map Location:"
            hideChevron
          />
        </List>
        <Tile
          imageSrc={{ uri: mapScreenshot}}
          featured
        />
        <View>
        <Image
          source={{uri: 'https://ibb.co/caTB8Q'}}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: 'transparent',
  },
  listText: {
    color: 'gray',
  },
  red: {
    color: 'red',
  },
});

export default InventoryDetail;
