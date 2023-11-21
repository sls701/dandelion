import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '../components/HomeScreen';
import DiscoverScreen from '../components/DiscoverScreen';
import FriendsScreen from '../components/FriendsScreen';
import ProfileScreen from '../components/ProfileScreen';
import TabBar from '../components/TabBar';
import {Icon} from 'react-native-eva-icons';

const Stack = createStackNavigator();

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

export default function UserStack() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}