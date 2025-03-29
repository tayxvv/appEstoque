import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const AddStockScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddStock = async () => {
    try {
      await api.post('/stock', { name, quantity: parseInt(quantity) });
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Adicionar" onPress={handleAddStock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddStockScreen;