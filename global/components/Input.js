import React, {Component, Fragment} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles/styles';
import ErrorLabel from './ErrorLabel';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <TextInput
          secureTextEntry={this.props.isPassword}
          style={[styles.textInput]}
          placeholder={this.props.placeholder}
          placeholderTextColor={'grey'}
        />
        <ErrorLabel error='error'/>
      </Fragment>
    );
  }
}

export default Input;
