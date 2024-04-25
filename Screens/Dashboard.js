import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    //this.ws= WebSocket('ws://192.168.1.125:5000')
  }

  componentDidMount(){ //use effect
    
  }

  render() {
    return (
      <View>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

export default Dashboard;
