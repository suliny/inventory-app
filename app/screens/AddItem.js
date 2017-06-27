import React, { Component } from 'react';
import { ScrollView, TextInput, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{paddingHorizontal: 15, marginTop: 15, marginBottom: 15}}>
          <Text>Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "#fff"}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Text>Location</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "#fff"}}
            onChangeText={(location) => this.setState({location})}
            value={this.state.location}
          />
        </View>
        <Button
          buttonStyle={{marginTop: 15}}
          title="Save"
        />
      </ScrollView>
    );
  }
}

export default AddItem;
