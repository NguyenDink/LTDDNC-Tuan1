import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroProfilePage from "./components/IntroProfilePage";
import HomePage from "./components/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroProfile">
        <Stack.Screen 
          name="IntroProfile" 
          component={IntroProfilePage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

