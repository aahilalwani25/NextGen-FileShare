import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import Input from '../global/components/Input';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import ErrorLabel from '../global/components/ErrorLabel';
import { GoogleButton } from '../global/components/Buttons/SocialAuthButtons';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[styles.screenColorLight, styles.container, styles.centerItems,{gap:30}]}>
        <Heading>Login</Heading>
        <View style={[{flexDirection: 'column', gap: 10, width:'100%', alignItems:'center'}]}>
          <Input placeholder="email" />
          
          <Input placeholder="password" isPassword={true} />

          <PrimaryButton text='Login'/>
        </View>

        <View style={[{flexDirection: 'column', gap: 10, width:'100%', alignItems:'center'}]}>
          <GoogleButton/>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
