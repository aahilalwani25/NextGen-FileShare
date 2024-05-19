import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../Screens/StartScreen';
import Dashboard from '../Screens/Dashboard';
import DisplayName from '../Screens/DisplayName';
import socket from '../socket/socket';
import ImportFile from '../Screens/ImportFile';

const Stack = createStackNavigator();

class StackNavigator extends Component {
  constructor(props) {
    super(props);
    // Initialize socket connection (if needed) - Example: socket.connect('http://192.168.3.37:5000');
    this.clientSocket= socket.connect();
  }

  componentDidMount() {
    // Emit socket event only if socket is connected
    if (this.clientSocket.connected) {
      console.log('Socket ID:', this.clientSocket.id);
      // Example: Emit socket ID to server
    }
  
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="display_name"
            options={{headerShown:false}}
          >
            {props => <DisplayName {...props} clientSocket={this.clientSocket} />}
          </Stack.Screen>
          <Stack.Screen
            name="dashboard"
            options={({ route }) => ({
              title: `Welcome ${route.params?.name || 'User'}`,
              headerShown: true,
            })}
          >
            {props => <Dashboard {...props} clientSocket={this.clientSocket} />}
          </Stack.Screen>
          <Stack.Screen name='ImportFile'>
          {props => <ImportFile {...props}  />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

export default StackNavigator;
