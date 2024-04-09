import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[styles.screenColorLight, styles.container, styles.centerItems]}>
        <View style={[styles.centerItems,{flex: 0.7}]}>
          <Heading>NextGen - File Share</Heading>
          <Text style={[styles.textBlack, styles.normalText]}>
            A seamless File Sharing Platform
          </Text>
        </View>

        <View style={[styles.centerItems,{flex: 0.3}]}>
          <PrimaryButton onPress={()=>this.props.navigation.navigate('login')}>
            Get Started
          </PrimaryButton>
        </View>
      </View>
    );
  }
}

export default StartScreen;
