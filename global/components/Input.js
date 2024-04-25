import React, {Component, Fragment, } from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles/styles';
import ErrorLabel from './ErrorLabel';
import {connect} from 'react-redux'
import { setError, setIsError } from '../../Redux/ErrorLabel/actions';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <TextInput
        onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.isPassword}
          style={[styles.textInput]}
          placeholder={this.props.placeholder}
          placeholderTextColor={'grey'}
        />
        <ErrorLabel error='Error'/>
      </Fragment>
    );
  }
}

const mapStateToProps=(state)=>({
  is_error: state.ErrorReducer.is_error,
  error: state.ErrorReducer.error
})

export default connect(mapStateToProps,{setIsError,setError}) (Input);
