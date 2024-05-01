import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Component } from 'react';
import StartScreen from '../Screens/StartScreen';
import DisplayName from '../Screens/DisplayName';
import Dashboard from '../Screens/Dashboard';
//import LoginScreen from '../Screens/LoginScreen';

const Stack= createStackNavigator();

class StackNavigator extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{
            headerShown:false,
          }}>
            <Stack.Screen name='start' component={StartScreen}/>
            {/* <Stack.Screen name='login' component={LoginScreen}/> */}
            <Stack.Screen name='display_name' component={DisplayName}/>
            <Stack.Screen name='dashboard' component={Dashboard}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigator;
