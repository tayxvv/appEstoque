import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StockItem from './StockItem';

const StockList = ({ stock }) => {
  return (
    <FlatList
      data={stock}
      renderItem={({ item }) => <StockItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StockList;