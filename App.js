import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loja from './Loja';
import Banner from './Banner';
import Detalhe from './Detalhe';

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      navigation.navigate('Loja');
    } else {
      alert('Nome de usuário ou senha inválidos');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    alert('Esqueceu a senha?');
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={styles.imglogo12} source={require('./img/logo12.png')} />
        <Text style={styles.titulo}> Login Oficinas Moc</Text>
      
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
       
      <View style={styles.eyeIcon}>
        <Feather
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="black"
          onPress={toggleShowPassword}
        />
      </View>

      </View>
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Esqueceu a senha?
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loja" component={Loja} />
        <Stack.Screen name="Banner" component={Banner} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7BABE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop:0,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 0,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput: {
    marginLeft:2,
    backgroundColor: "#fff",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '70%',
    height: 50,
    marginVertical: 13,
    paddingHorizontal: 10,
},
 eyeIcon:{
  backgroundColor: "#fff",
  padding: 8,
  paddingTop:13,
  paddingBottom: 13,
 },
 
  forgotPassword: {
    marginTop: 100,
    color: 'blue',
  },
  imglogo12:{
    marginLeft:110,
    width:100,
    height:100,
    marginBottom:30,
  },
  forgotPassword:{
    marginTop:60,
    color:'#1F2256',
    
    
  },
  
    
    
   
  
});