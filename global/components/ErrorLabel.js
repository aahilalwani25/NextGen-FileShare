import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

class ErrorLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Text style={[styles.errorLabel]}>{this.props.error}</Text>;
  }
}

export default ErrorLabel;
