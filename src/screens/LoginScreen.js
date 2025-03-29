import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import { login } from '../services/auth';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (username, password) => {
    try {
      const response = await login(username, password);
      if (response.data.token) {
        navigation.navigate('Stock');
      } else if (!response.data.token && response.data.error) {
        alert(response.data.error.message);
      } else {
        alert('Falha no login. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Falha na comunicação com o servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;