import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Component} from 'react';
import StartScreen from '../Screens/StartScreen';
import Dashboard from '../Screens/Dashboard';
import DisplayName from '../Screens/DisplayName';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="start" component={StartScreen} />
            {/* <Stack.Screen name='login' component={LoginScreen}/> */}
            <Stack.Screen name="display_name" component={DisplayName} />
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              headerShown: true,
            }}>
            <Stack.Screen
              name="dashboard"
              component={Dashboard}
              options={props => ({
                title: `Welcome ${props.route.params.name}`,
              })}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigator;
