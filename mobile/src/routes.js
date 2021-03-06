import * as React from 'react';

import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationOptions = (navigation, title) => ({
  title,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

function SignRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function NewRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <Stack.Screen
        options={({ navigation }) =>
          NavigationOptions(navigation, 'Select a Provider')
        }
        name="SelectProvider"
        component={SelectProvider}
      />
      <Stack.Screen
        options={({ navigation }) =>
          NavigationOptions(navigation, 'Select a Date/Time')
        }
        name="SelectDateTime"
        component={SelectDateTime}
      />
      <Stack.Screen
        options={({ navigation }) =>
          NavigationOptions(navigation, 'Confirm Appointment')
        }
        name="Confirm"
        component={Confirm}
      />
    </Stack.Navigator>
  );
}

function DashboardRoute() {
  return (
    <Tab.Navigator
      screenOptions={{ unmountOnBlur: true }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255, 0.6)',
        keyboardHidesTabBar: true,
        style: { backgroundColor: '#8d41a8' },
      }}
    >
      <Tab.Screen
        name="Appointments"
        component={Dashboard}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ color }) => {
            return <Icon name="person" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NewRoutes"
        component={NewRoutes}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => {
            return <Icon name="add-circle-outline" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => {
            return <Icon name="person" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <Stack.Screen name="Dashboard" component={DashboardRoute} />
        ) : (
          <Stack.Screen name="Sign" component={SignRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
