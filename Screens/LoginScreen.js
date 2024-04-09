import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../global/styles/styles';
import Heading from '../global/components/Heading';
import Input from '../global/components/Input';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View
        style={[styles.screenColorLight, styles.container, styles.centerItems]}>
        <Heading>Login</Heading>
        <Input placeholder='email'/>
      </View>
    );
  }
}

export default LoginScreen;
