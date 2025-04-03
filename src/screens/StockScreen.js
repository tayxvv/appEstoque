import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import StockList from '../components/StockList';
import api from '../services/api';
import { logout, getUser } from '../services/auth';
import Icon from 'react-native-vector-icons/AntDesign';

const StockScreen = ({ navigation }) => {
  const [stock, setStock] = useState([]);
  const [user, setUser] = useState('');

  const fetchStock = async () => {
    try {
      const response = await api.get('/produtos');
      setStock(response.data);
    } catch (error) {
      console.error('Erro ao buscar estoque:', error);
    }
  };

  useEffect(() => {
    fetchStock();
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const userData = await getUser();
    console.log(userData.nome);
    setUser(userData);
  };

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  const handleProductAdded = () => {
    fetchStock();
  };

  const handleAddStockNavigation = () => {
    navigation.navigate('AddStock', { onProductAdded: handleProductAdded });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View style={styles.navigationBarTitles}>
          <Text style={styles.title}>Estoque</Text>
          {/* <Text style={styles.subTitle}>Olá, {user.nome}</Text> */}
        </View>
        <View style={styles.navigationBarIcons}>
          <Icon style={styles.icons} name="search1" size={30} color="#818181" />
          <Icon style={styles.icons} name="ellipsis1" size={30} color="#818181" />
        </View>
      </View>
      <View style={styles.navigationBar}>
        <Text style={styles.subTitle}>PRODUTOS</Text>
        <View style={styles.buttonInsert}>
        <TouchableOpacity style={styles.buttonInsert} onPress={handleAddStockNavigation}>
          <Text style={styles.labelInsert}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
      </View>
      <StockList stock={stock} />
      <Button title="Sair" onPress={handleLogout} />
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'semibold'
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
  },
  buttonInsert: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 7
  },
  labelInsert: {
    color: 'black',
    fontSize: 15
  }
});

export default StockScreen;