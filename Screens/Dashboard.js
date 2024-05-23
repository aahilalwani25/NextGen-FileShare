import React, { Component } from 'react';
import { View, Text, Dimensions, SectionList, Image } from 'react-native';
import { styles } from '../global/styles/styles';
import NormalText from '../global/components/NormalText';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import SectionHeader from '../global/components/SectionHeader';
import { io } from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { setConnection, setOnlineClients } from '../Redux/Dashboard/actions';
import { connect } from 'react-redux';
import DocumentController from '../Controller/DocumentController';
import DocumentPicker from 'react-native-document-picker';
import { setDocumentToBeSent } from '../Redux/SelectClient/action';

const { width, height } = Dimensions.get('screen');

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.props.clientSocket.emit('show-online-clients');
    this.props.clientSocket.on('online-clients', clients => {
      //console.log(this.props.onlineClients);
      this.props.setOnlineClients(clients['clients']);
      //console.log(this.props.onlineClients);
    });
  }

  componentWillUnmount() {
    // Remove the 'online-clients' event listener when the component is unmounted
    this.props.clientSocket.off('online-clients');
  }

  componentDidMount() {
    this.props.clientSocket.emit('show-online-clients');
    this.props.clientSocket.on('online-clients', clients => {
      //console.log(this.props.onlineClients);
      this.props.setOnlineClients(clients['clients']);
      //console.log(this.props.onlineClients);

      
    });

    // this.interval = setInterval(() => {
    //   this.props.clientSocket.emit('show-online-clients');
    // }, 1000);
  }


  renderItem = data => (
    // <View>
    //   {/* Render each name within the section */}
    //   {item.map((name, index) => (
    //     <Text key={index}>{name}</Text>
    //   ))}
    // </View>
    <View style={{ paddingLeft: width * 0.05, paddingVertical: width * 0.05 }}>
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
          <SectionList
            sections={[
              {
                title: 'Online Clients',
                data: this.props.onlineClients
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
            renderSectionHeader={({ section }) => (
              <SectionHeader online={section.title} />
            )}
            keyExtractor={(item, index) => item + index} // Use index as key
            renderItem={({ item }) => this.renderItem(item)} // Pass item to renderItem
          />
        </View>

        <PrimaryButton text={'Import File'} onPress={async () => {
          const documentController = new DocumentController();
          documentController.selectDoc().then((selected) => {
            if(selected['isSelected']){
              this.props.setDocumentToBeSent(selected['documentSelected'])
              this.props.navigation.navigate('ImportFile',{"document": this.props.document})
            }
          })
          //console.log(selected)



        }} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  //console.log('Redux State: ', state);
  return {
    isConnected: state.DashboardReducer.name,
    onlineClients: state.DashboardReducer.onlineClients,
    document: state.SelectClientReducer.document,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return bindActionCreators({
    setConnection,
    setOnlineClients,
    setDocumentToBeSent
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
