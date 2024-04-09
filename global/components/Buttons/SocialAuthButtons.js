import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/styles';

class GoogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={[styles.googleButton]}>
        <Image
          source={require('../../../assets/images/google_logo.png')}
          style={[styles.logo]}
        />
        <Text style={[styles.textBlack]}>Signin with Google</Text>
      </TouchableOpacity>
    );
  }
}

export {GoogleButton};
