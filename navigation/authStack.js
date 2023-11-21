import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../components/auth/1Onboarding';
import ChooseCountries from '../components/auth/3ChooseCountries';
import CreateAccount from '../components/auth/2CreateAccount';
import InitializeProfile from '../components/auth/4InitializeProfile';
import FinishSignup from '../components/auth/5FinishSignup';
import SignIn from '../components/auth/SignIn';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="ChooseCountries" component={ChooseCountries}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="InitializeProfile" component={InitializeProfile}/>
        <Stack.Screen name="FinishSignup" component={FinishSignup}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}