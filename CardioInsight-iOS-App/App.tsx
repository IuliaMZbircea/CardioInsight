
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupStack from './SignupStack'; // Update the path accordingly

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignupStack" component={SignupStack} />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;