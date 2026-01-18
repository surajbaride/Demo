import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductStack from './ProductStack';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { colors, spacing } from '../theme';
import strings from '../constants/strings';

const Tab = createBottomTabNavigator();

// Helper component for tab icons (using emoji for simplicity)
const TabIcon = ({ icon, size }) => {
  return <Text style={{ fontSize: size }}>{icon}</Text>;
};

/**
 * TabNavigator Component
 * Bottom tab navigation with 4 main tabs: Home, Products, Orders, Profile
 */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.textWhite,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: strings.home,
          tabBarIcon: ({ size }) => <TabIcon icon="🏠" size={size} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          headerShown: false,
          title: strings.products,
          tabBarIcon: ({ size }) => <TabIcon icon="📦" size={size} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: strings.orders,
          tabBarIcon: ({ size }) => <TabIcon icon="📋" size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: strings.profile,
          tabBarIcon: ({ size }) => <TabIcon icon="👤" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

