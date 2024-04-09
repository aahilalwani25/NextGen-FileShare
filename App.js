import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './Navigations/StackNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StackNavigator/>
    );
  }
}

export default App;
