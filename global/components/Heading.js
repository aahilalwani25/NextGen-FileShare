import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.textBlack, styles.heading]}>
        {this.props.children}
      </Text>
    );
  }
}

export default Heading;
