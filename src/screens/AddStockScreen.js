import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../services/api';

const AddStockScreen = ({ navigation, route }) => {
  const [nome_produto, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade_fornecedor, setQuantidadeFornecedor] = useState('');
  const [id_categoria, setIdCategoria] = useState('');

  const handleAddStock = async () => {
    try {
      await api.post('/produtos', { 
        nome_produto, 
        descricao, 
        preco: parseFloat(preco), 
        quantidade_fornecedor: parseInt(quantidade_fornecedor), 
        id_categoria: parseInt(id_categoria) 
      });
      route.params.onProductAdded();
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
        value={nome_produto}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade Fornecedor"
        value={quantidade_fornecedor}
        onChangeText={setQuantidadeFornecedor}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={id_categoria}
        onChangeText={setIdCategoria}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.buttonInsert} onPress={handleAddStock}>
        <Text style={styles.labelInsert}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
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
    borderRadius: 20
  },
  buttonInsert: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  },
  labelInsert: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default AddStockScreen;