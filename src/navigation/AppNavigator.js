import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import StockScreen from '../screens/StockScreen';
import AddStockScreen from '../screens/AddStockScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Stock" component={StockScreen} options={{ title: 'Estoque' }} />
      <Stack.Screen name="AddStock" component={AddStockScreen} options={{ title: 'Adicionar Produto' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;