import {Dimensions, Text, View} from 'react-native';
import React, {Component} from 'react';
import { styles } from '../styles/styles';
import Heading from './Heading';
import OnlineSignal from './OnlineSignal';

const {width, height} = Dimensions.get('screen');

export class SectionHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          {
            padding: width * 0.01,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'baseline',
          },
          styles.border,
        ]}>
        <Heading>{this.props.online}</Heading>
        <OnlineSignal />
      </View>
    );
  }
}

export default SectionHeader;
