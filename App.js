import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/Home';
import Form from './src/pages/form/Form';
import End from './src/pages/end/End';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name='Form'
          component={Form}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name='End'
          component={End}
          options={{ title: 'Home', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
