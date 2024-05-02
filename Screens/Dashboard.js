import React, {Component} from 'react';
import {View, Text, Dimensions, SectionList} from 'react-native';
import Heading from '../global/components/Heading';
import {styles} from '../global/styles/styles';
import NormalText from '../global/components/NormalText';
import OnlineSignal from '../global/components/OnlineSignal';
import {FlatList} from 'react-native-gesture-handler';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import SectionHeader from '../global/components/SectionHeader';

const {width, height} = Dimensions.get('screen');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //this.ws= WebSocket('ws://192.168.1.125:5000')
  }

  renderItem = (data) => (
    // <View>
    //   {/* Render each name within the section */}
    //   {item.map((name, index) => (
    //     <Text key={index}>{name}</Text>
    //   ))}
    // </View>
    <View>
      <NormalText>{data}</NormalText>
    </View>
  );

  render() {
    return (
      <View style={[styles.fullScreen, {padding: width * 0.1}]}>
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
          <SectionList
            sections={[
              {
                title: 'Online',
                data: ['Aahil', 'Omer'],
              }
              
            ]}
            
            renderSectionHeader={({section}) => (
              <SectionHeader online={section.title} />
            )}
            keyExtractor={(item, index) => item+index} // Use index as key
            renderItem={({item}) => this.renderItem(item)} // Pass item to renderItem
          />

          {/* <FlatList
            data={[
              {
                name: 'Aahil',
              },
              {
                name: 'Omer',
              },
            ]}
            renderItem={({item, index}) => {
              return (
                <View>
                  <NormalText>{item.name}</NormalText>
                </View>
              );
            }}
          /> */}
        </View>
      </View>
    );
  }
}

export default Dashboard;
