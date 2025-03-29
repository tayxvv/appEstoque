import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import StockList from '../components/StockList';
import api from '../services/api';
import { logout, getUser } from '../services/auth';
import Icon from 'react-native-vector-icons/AntDesign';

const StockScreen = ({ navigation }) => {
  const [stock, setStock] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await api.get('/stock');
        setStock(response.data);
      } catch (error) {
        console.error('Erro ao buscar estoque:', error);
      }
    };

    const fetchUser = async () => {
      const userData = await getUser();
      console.log(userData.nome);
      setUser(userData);
    };

    fetchStock();
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View style={styles.navigationBarTitles}>
          <Text style={styles.title}>Início</Text>
          <Text style={styles.subTitle}>Olá, {user.nome}</Text>
        </View>
        <View style={styles.navigationBarIcons}>
          <Icon style={styles.icons} name="search1" size={30} color="#818181" />
          <Icon style={styles.icons} name="ellipsis1" size={30} color="#818181" />
        </View>
      </View>
      <StockList stock={stock} />
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('AddStock')} />
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#818181',
    fontSize: 24,
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navigationBarTitles: {
    flexDirection: 'column',
  },
  navigationBarIcons: {
    flexDirection: 'row',
  },
  icons: {
    marginLeft: 20
  }
});

export default StockScreen;