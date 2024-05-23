import {Dimensions, SectionList, Text, View} from 'react-native';
import React, {Component} from 'react';
import SectionHeader from './SectionHeader';
import NormalText from './NormalText';
import {styles} from '../styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedClient } from '../../Redux/SelectClient/action';

const {width, height} = Dimensions.get('screen');

class OnlineClientsList extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.onlineClients);
  }

  renderItem = data => (
    // <View>
    //   {/* Render each name within the section */}
    //   {item.map((name, index) => (
    //     <Text key={index}>{name}</Text>
    //   ))}
    // </View>
    <TouchableOpacity style={{paddingLeft: width * 0.05, paddingVertical: width * 0.05}} onPress={()=>this.props.setSelectedClient(data['id'])}>
      <View>
        <NormalText>{data['name']}</NormalText>
      </View>
    </TouchableOpacity>
  );

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
        <SectionList
          sections={[
            {
              title: 'Online Clients',
              data: this.props.onlineClients,
            },
          ]}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 'auto',
                height: height * 0.001,
                backgroundColor: 'black',
              }}
            />
          )}
          renderSectionHeader={({section}) => (
            <SectionHeader online={section.title} />
          )}
          keyExtractor={(item, index) => item + index} // Use index as key
          renderItem={({item}) => this.renderItem(item)} // Pass item to renderItem
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  //console.log('Redux State: ', state);
  return {
    selectedClientSocketID: state.SelectClientReducer.selectedClientSocketID,
    onlineClients: state.DashboardReducer.onlineClients
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return bindActionCreators({
    setSelectedClient
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineClientsList);

