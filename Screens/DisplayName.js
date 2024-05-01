import {Dimensions, Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import NormalText from '../global/components/NormalText';
import Input from '../global/components/Input';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';


class DisplayName extends Component {
  render() {
    return (
      <View
        style={[
          styles.screenColorLight,
          styles.container,
          styles.centerItems,
          {gap: 30},
        ]}>
        <Heading>Display Name</Heading>
        <NormalText>Show your name to other users</NormalText>
        <Input placeholder="Display Name" />

        <PrimaryButton text='Show' onPress={()=>this.props.navigation.navigate('dashboard')}/>
      </View>
    );
  }
}

export default DisplayName;
