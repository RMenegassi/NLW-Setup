import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import New from '../screens/New';
import Habit from '../screens/Habit';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="new" component={New} />
      <Stack.Screen name="habit" component={Habit} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
