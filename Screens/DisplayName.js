import {Dimensions, Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../global/styles/styles';
import Heading from '../global/components/Heading';
import NormalText from '../global/components/NormalText';
import Input from '../global/components/Input';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setName } from '../Redux/DisplayName/actions';


class DisplayName extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
        <Input placeholder="Display Name" onChangeText={(name)=> this.props.setName(name)}/>

        <PrimaryButton text='Show' onPress={()=>this.props.navigation.navigate('dashboard',{name: this.props.name})}/>
      </View>
    );
  }
}


function mapStateToProps(state) {
  console.log('Redux State: ', state);
  return {
    name: state.DisplayNameReducer.name
  };
}

function mapDispatchToProps(dispatch){
  console.log(dispatch);
  return bindActionCreators({
    setName,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayName);
