import React, {Component} from 'react';
import {View, Text, Dimensions, SectionList} from 'react-native';
import {styles} from '../global/styles/styles';
import NormalText from '../global/components/NormalText';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import SectionHeader from '../global/components/SectionHeader';
import {io} from 'socket.io-client';
import {bindActionCreators} from 'redux';
import {setConnection, setOnlineClients} from '../Redux/Dashboard/actions';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.clientSocket.emit('show-online-clients');
  }

  componentDidUpdate(){
    
  }

  componentDidMount() {
    
    this.props.clientSocket.on('online-clients', clients => {
      //console.log(this.props.onlineClients);
      this.props.setOnlineClients(clients['clients']);
      console.log(this.props.onlineClients);
    });
  }

  renderItem = data => (
    // <View>
    //   {/* Render each name within the section */}
    //   {item.map((name, index) => (
    //     <Text key={index}>{name}</Text>
    //   ))}
    // </View>
    <View style={{paddingLeft: width * 0.05, paddingVertical: width * 0.05}}>
      <NormalText>{data['name']}</NormalText>
    </View>
  );

  render() {
    return (
      <View
        style={[
          styles.fullScreen,
          {
            padding: width * 0.1,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
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
          {this.props.onlineClients.length === 0 ? (
            <Text>No online clients right now</Text>
          ) : (
            <SectionList
              //getItemCount={data => data.length}
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
              //getItemCount={data => data.length}
              keyExtractor={(item, index) => item + index} // Use index as key
              renderItem={({item}) => this.renderItem(item)} // Pass item to renderItem
            />
          )}
        </View>

        <PrimaryButton text={'Import File'} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('Redux State: ', state);
  return {
    isConnected: state.DashboardReducer.name,
    onlineClients: state.DashboardReducer.onlineClients,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return bindActionCreators(
    {
      setConnection,
      setOnlineClients,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
