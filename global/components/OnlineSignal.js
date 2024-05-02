import { Dimensions, Text, View } from 'react-native'
import React, { Component } from 'react'

const {width, height}= Dimensions.get('screen')

export class OnlineSignal extends Component {
  render() {
    return (
      <View style={{borderRadius:50, width: width*0.045, height: height*0.02, backgroundColor:'green'}}/>
    )
  }
}

export default OnlineSignal