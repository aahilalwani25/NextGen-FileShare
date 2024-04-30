import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import Input from '../global/components/Input';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import ErrorLabel from '../global/components/ErrorLabel';
import {connect} from 'react-redux';
import {GoogleButton} from '../global/components/Buttons/SocialAuthButtons';
import {setButtonPressed, setEmail, setPassword} from '../Redux/Login/actions';
import {setEmailError} from '../Redux/ErrorLabel/actions';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //this.ws = new WebSocket('ws://192.168.0.125:5000');
  }

  loginPressed() {
    console.log(this.props.email);
    if (
      !RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(
        this.props.email,
      )
    ) {
      this.props.setEmailError(true,'invalid email');
    } else {
      this.props.setEmailError(false,null);
    }
    // this.ws.onopen=(()=>{
    //   console.log('connected')
    // })
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={[
          styles.screenColorLight,
          styles.container,
          styles.centerItems,
          {gap: 30},
        ]}>
        <Heading>Login</Heading>
        <View
          style={[
            {
              flexDirection: 'column',
              gap: 10,
              width: '100%',
              alignItems: 'center',
            },
          ]}>
          <Input
            onChangeText={email => this.props.setEmail(email)}
            is_error={this.props.is_error}
            error={this.props.error}
            placeholder="email"
          />

          <Input
            onChangeText={password => this.props.setPassword(password)}
            placeholder="password"
            isPassword={true}
          />
          {/* {this.props.is_error ? <ErrorLabel error={this.props.error} /> : null} */}
          <PrimaryButton text="Login" onPress={this.loginPressed} />
        </View>

        <View
          style={[
            {
              flexDirection: 'column',
              gap: 10,
              width: '100%',
              alignItems: 'center',
            },
          ]}>
          <GoogleButton />

          <PrimaryButton text='Login as Guest' onPress={()=>this.props.navigation.navigate('display_name')}/>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('Redux State: ', state)
  return {
    email: state.LoginReducer.email, //LoginReducer is in the reducer file
    password: state.LoginReducer.password,
    buttonPressed: state.LoginReducer.buttonPressed,
    isEmailerror: state.ErrorReducer.is_error,
    error: state.ErrorReducer.error,
  };
}

export default connect(mapStateToProps, {
  setEmail,
  setPassword,
  setButtonPressed,
  setEmailError,
})(LoginScreen);
