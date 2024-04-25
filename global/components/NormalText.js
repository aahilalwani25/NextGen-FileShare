import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../styles/styles';

export class NormalText extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
        <Text style={[styles.textBlack, styles.normalText]}>{this.props.children}</Text>
    )
  }
}

export default NormalText