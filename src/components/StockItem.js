import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StockItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.nome_produto}</Text>
      <Text>Descrição: {item.descricao}</Text>
      <Text>Preço: {item.preco}</Text>
      <Text>Quantidade de fornecedores: {item.quantidade_fornecedor}</Text>
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