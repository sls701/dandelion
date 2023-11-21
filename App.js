import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Onboarding from './components/auth/1Onboarding';
import ChooseCountries from './components/auth/3ChooseCountries';
import CreateAccount from './components/auth/2CreateAccount';
import InitializeProfile from './components/auth/4InitializeProfile';
import FinishSignup from './components/auth/5FinishSignup';
import SignIn from './components/auth/SignIn';

import HomeScreen from './components/HomeScreen';
import DiscoverScreen from './components/DiscoverScreen';
import FriendsScreen from './components/FriendsScreen';
import ProfileScreen from './components/ProfileScreen';
import TabBar from './components/TabBar';

import {Icon} from 'react-native-eva-icons';

import './config/firebase';
import RootNavigation from './navigation';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Discover':
      iconName = 'search-outline';
      break;
    case 'PlaceholderScreen':
      iconName = 'plus-circle-outline';
      break;
    case 'Friends':
      iconName = 'people-outline';
      break;
    case 'Profile':
      iconName = 'radio-button-off';
      break;
    default:
      break;
  }
  return <Icon name={iconName} fill={color} height={30} width={30} style={{marginTop: 10}}/>;
};

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={"Home"} screenOptions={({route}) => ({tabBarActiveTintColor: '#FFC52E',
      tabBarInactiveTintColor: '#95989A', headerShown: false, tabBarShowLabel: false,
      tabBarIcon: ({color}) => screenOptions(route, color)
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="PlaceholderScreen" component={HomeScreen} options={{title: 'Post'}}/>
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  // import custom fonts
  const [fontsLoaded] = useFonts({
    'Segoe-UI': require('./assets/fonts/Segoe-UI.ttf'),
    'Segoe-Bold': require('./assets/fonts/Segoe-Bold.ttf'),
    'Segoe-Semibold': require('./assets/fonts/Segoe-Semibold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Onboarding" component={Onboarding}/>
          <Stack.Screen name="ChooseCountries" component={ChooseCountries}/>
          <Stack.Screen name="CreateAccount" component={CreateAccount}/>
          <Stack.Screen name="InitializeProfile" component={InitializeProfile}/>
          <Stack.Screen name="FinishSignup" component={FinishSignup}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </SafeAreaProvider>
     </NavigationContainer>
     // <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
