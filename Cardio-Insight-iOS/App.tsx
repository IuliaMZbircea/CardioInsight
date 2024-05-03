import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Profile from './app/screens/Profile';
import Login from './app/screens/Login';
import BasicUser from './app/screens/BasicUser';
import Signup from './app/screens/Signup';
import UserTypeSelection from './app/screens/UserTypeSelection';


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name = "TEST" component={BasicUser}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="UserTypeSelection">      
          /*<Stack.Screen name = "Login" component={Signup} />
          <Stack.Screen name = "BasicUser" component={BasicUser} />
        {/* <Stack.Screen name = "Signup" component={SignupScreen} />
        <Stack.Screen name = "SignupStack" component = {UserTypeSelection} />
        <Stack.Screen name = "ProfileScreen" component = {ProfileScreen} /> */}
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

