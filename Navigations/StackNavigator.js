import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import { Component } from 'react';
import StartScreen from '../Screens/StartScreen';

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
            <Stack.Screen name='login' component={LoginScreen}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigator;
