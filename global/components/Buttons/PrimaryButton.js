import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity style={[styles.primaryButton]} onPress={this.props.onPress}>
        <Text style={[styles.textBlack, styles.normalText]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default PrimaryButton;
