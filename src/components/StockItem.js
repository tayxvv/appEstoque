import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StockItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Quantidade: {item.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StockItem;