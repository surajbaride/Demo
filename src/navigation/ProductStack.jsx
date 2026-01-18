import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../screens/Products/ProductListScreen';
import ProductDetailsScreen from '../screens/Products/ProductDetailsScreen';
import { colors } from '../theme';
import strings from '../constants/strings';

const Stack = createStackNavigator();

/**
 * ProductStack Navigator
 * Stack navigation for Products tab (ProductList and ProductDetails screens)
 */
const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.textWhite,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: strings.products }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: strings.productDetails }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;

