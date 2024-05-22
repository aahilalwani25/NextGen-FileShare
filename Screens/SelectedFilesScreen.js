import React from 'react';
import {Alert, Dimensions, Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import NormalText from '../global/components/NormalText';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';

const {width, height} = Dimensions.get('screen');

export default class SelectedFilesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('doc: ', this.props.route.params);
  }

  renderItem = data => (
    // <View>
    //   {/* Render each name within the section */}
    //   {item.map((name, index) => (
    //     <Text key={index}>{name}</Text>
    //   ))}
    // </View>
    <View
      style={{
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
      }}>
      {/* <NormalText>{data['name']}</NormalText> */}
      <Image
        width={100}
        style={{borderRadius: 20}}
        height={100}
        source={{
          uri: data['uri'],
        }}
      />
      <NormalText style={{fontSize: 10}}>{data['name']}</NormalText>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.5}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Selected File
          </Text>
          <FlatList
            data={this.props.route.params['document']}
            renderItem={({item}) => this.renderItem(item)}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            marginTop: height * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <PrimaryButton
            text={'Confirm'}
            onPress={async () => {
              Alert.alert('Confirm', 'Are tou sure you want to confirm?', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () =>
                    this.props.navigation.navigate('selectClient', {
                      doc: this.props.route.params['document'],
                      onlineClients: this.props.clientSocket,
                    }),
                },
              ]);
            }}
          />
        </View>
      </View>
    );
  }
}
