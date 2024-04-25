import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import Input from '../global/components/Input';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import ErrorLabel from '../global/components/ErrorLabel';
import {connect} from 'react-redux';
import { GoogleButton } from '../global/components/Buttons/SocialAuthButtons';
import { setButtonPressed, setEmail, setPassword } from '../Redux/Login/actions';

class LoginScreen extends Component {
  
  

  constructor(props) {
    super(props);
    this.state = {};

    this.ws= new WebSocket('ws://192.168.0.125:5000')
  }

  loginPressed(){
    this.ws.onopen=(()=>{
      console.log('connected')
    })
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <View
        style={[styles.screenColorLight, styles.container, styles.centerItems,{gap:30}]}>
        <Heading>Login</Heading>
        <View style={[{flexDirection: 'column', gap: 10, width:'100%', alignItems:'center'}]}>
          <Input onChangeText={(email)=>this.props.setEmail(email)} placeholder="email" />
          
          <Input onChangeText={(password)=>this.props.setPassword(password)} placeholder="password" isPassword={true} />

          <PrimaryButton text='Login' onPress={this.loginPressed()}/>
        </View>

        <View style={[{flexDirection: 'column', gap: 10, width:'100%', alignItems:'center'}]}>
          <GoogleButton/>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.LoginReducer.email, //LoginReducer is in the reducer file
    password: state.LoginReducer.password,
    buttonPressed: state.LoginReducer.buttonPressed,
  };
}

export default connect(mapStateToProps,{setEmail,setPassword,setButtonPressed})(LoginScreen);
