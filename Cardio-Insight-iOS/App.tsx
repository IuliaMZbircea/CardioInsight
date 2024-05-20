import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import BasicUser from './app/screens/BasicUser';
import Signup from './app/screens/Signup';
import UserTypeSelection from './app/screens/UserTypeSelection';
import UserProfile from './app/screens/UserProfile';
import Insights from './app/screens/Insights';

//Amplify Authentication 
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import amplifyconfig from './src/amplifyconfiguration.json';
import AdvancedUser from './app/screens/AdvancedUser';

Amplify.configure(amplifyconfig);

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="BasicUser">
        <Stack.Screen 
            name="UserProfile" 
            component={UserProfile}
            options={{
              title: 'Profile', 
              headerStyle: {
                backgroundColor: '#F8F3F3', 
              },
              headerTintColor: '#C83030',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 27,
              },
            }}/>
        <Stack.Screen 
              name="Login" 
              component={Login} 
              options={
                { headerShown: false }
              }/>
        <Stack.Screen 
              name="Signup" 
              component={Signup}
              options={
                { headerShown: false }
              } />
        <Stack.Screen 
              name="BasicUser" 
              component={BasicUser} 
              options={
                { headerShown: false }
              } />
        <Stack.Screen 
              name="UserTypeSelection" 
              component={UserTypeSelection} 
              options={
                { headerShown: false }
              } />
        <Stack.Screen 
              name="Insights" 
              component={Insights}
              options={
                { headerShown: false }
              } />
        <Stack.Screen 
              name="AdvancedUser" 
              component={AdvancedUser}
              options={
                { headerShown: false }
              }/>
        
    </Stack.Navigator>
    </NavigationContainer>
  );
}
