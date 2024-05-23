import {Text, View} from 'react-native';
import React, {Component} from 'react';
import NormalText from '../global/components/NormalText';
import Heading from '../global/components/Heading';
import OnlineClientsList from '../global/components/OnlineClientsList';
import {bindActionCreators} from 'redux';
import {setConnection, setOnlineClients} from '../Redux/Dashboard/actions';
import {connect} from 'react-redux';
import {
  setDocumentToBeSent,
  setSelectedClient,
} from '../Redux/SelectClient/action';
import PrimaryButton from '../global/components/Buttons/PrimaryButton';
import DocumentController from '../Controller/DocumentController';

export class SelectClientsScreen extends Component {
  constructor(props) {
    super(props);

    //console.log(this.props.route.params);
  }

  componentDidUpdate() {
    // this.onlineClients.on('online-clients', clients => {
    //   //console.log(this.props.onlineClients);
    //   this.props.setOnlineClients(clients['clients']);
    //   console.log(this.props.onlineClients);
    // });
  }

  componentWillUnmount() {
    // Remove the 'online-clients' event listener when the component is unmounted
    //this.onlineClients.off('online-clients');
  }

  componentDidMount() {
    // this.onlineClients.on('online-clients', clients => {
    //   //console.log(this.props.onlineClients);
    //   this.props.setOnlineClients(clients['clients']);
    //   console.log(this.props.onlineClients);
    // });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <Heading>Select Client you want to send</Heading>
          <OnlineClientsList />

          <PrimaryButton
            text={'Send'}
            onPress={async () => {
              //console.log(this.props.selectedClientSocketID);
              // this.props.clientSocket.emit('send-file', {
              //   receiver: this.props.selectedClientSocketID,
              //   document: this.props.document
              // });

              const documentController = new DocumentController();
              documentController.sendDoc(
                this.props.selectedClientSocketID,
                this.props.document,
                this.props.clientSocket,
              );
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  //console.log('Redux State: ', state);
  return {
    document: state.SelectClientReducer.document,
    selectedClientSocketID: state.SelectClientReducer.selectedClientSocketID,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return bindActionCreators(
    {
      setDocumentToBeSent,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectClientsScreen);
