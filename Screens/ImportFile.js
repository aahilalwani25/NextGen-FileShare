import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../global/styles/styles';

export default class ImportFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.route.params;
  }
  render() {
    return (
      <View>
        {/* <Image source={{
                    uri: this.state.document[0]['name']
                }}/> */}

        <FlatList
          data={this.state.document}
          renderItem={({item}) => {
            return (
              <Text style={[styles.normalText, styles.textBlack]}>
                {item['name']}
              </Text>
            );
          }}
        />
      </View>
    );
  }
}
