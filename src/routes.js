import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Usuários',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',}}/>
      <Stack.Screen
        name="User"
        component={User}
        options={
          ({ route }) => ({
            title: route.params.user.name,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center', })
          }
        />
        <Stack.Screen
        name="Repository"
        component={Repository}
        options={
          ({ route }) => ({
            title: route.params.repository.name,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center', })
          }
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;
