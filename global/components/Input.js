import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TextInput 
      style={{borderWidth:1, borderRadius:20}}
      placeholder={this.props.placeholder}
      placeholderTextColor={'grey'}
      />
    );
  }
}

export default Input;
