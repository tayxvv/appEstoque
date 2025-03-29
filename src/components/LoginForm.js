import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
        onLogin(username, password);
    } else {
        alert('Digite o usuário e senha!');
    }
  };

  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../../src/assets/backGroundImageLoginDesfoc.png')}
        style={styles.background}
        blurRadius={5}
        >
        <View style={styles.content}>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu usuário"
                    placeholderTextColor="#A0A0A0"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#A0A0A0"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity onPress={handleLogin}>
            <LinearGradient
            colors={['#B8860B', '#FFDEAD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
            >
            <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    loginButtonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "semibold",
    },
    gradientButton: {
        position: "absolute",
        bottom: 30,
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        alignSelf: "center",
  },
  container: {
    flex: 1,
  },
  forgotPassword: {
    color: "#000",
    fontSize: 16,
    textDecorationLine: "none",
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "semibold",
    color: "#FFF",
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#FFF",
    color: "#000",
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    width: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  inputContainer: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
});

export default LoginForm;