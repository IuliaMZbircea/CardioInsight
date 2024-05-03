// SignupStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './Screens/UserTypeSelection'; 
import BasicUser from './Screens/BasicUser'; 
import AdvancedUser from './Screens/AdvancedUser'; 

const Stack = createStackNavigator();

const SignupStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="BasicUser" component={BasicUser} />
      <Stack.Screen name="AdvancedUser" component={AdvancedUser} />
    </Stack.Navigator>
  );
};

export default SignupStack;
