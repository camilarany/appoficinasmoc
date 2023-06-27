import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Banner from './Banner';
import { oficinas } from './Base';
import styles from './style';
import Detalhe from './Detalhe';

export default function Loja({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('home');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      Alert.alert('Erro', 'Digite um termo de busca válido.');
      return;
    }

  
    const results = oficinas.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (results.length === 0) {
      Alert.alert('Resultado', 'Nenhum resultado encontrado para o termo de busca.');
    } else {
      navigation.navigate('Resultado', { results });
    }
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
   
    if (tab === 'home') {
      navigation.navigate('Home');
    } else if (tab === 'perfil') {
      navigation.navigate('Perfil');
    } else if (tab === 'configuracoes') {
      navigation.navigate('Configuracoes');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.titulo}>Oficinas Moc</Text>
      </View>
  
      <View style={styles.navBuscar}>
        <View style={styles.buscar}>
          <TextInput
            style={styles.inputBuscar}
            placeholder="Buscar..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity style={styles.btnBuscar} onPress={handleSearch}>
            <Image style={styles.imgBuscar} source={require('./img/bt-buscar.png')} />
          </TouchableOpacity>
        </View>
      </View>
  
      <ScrollView style={styles.scroll}>
        <View style={styles.containerBlocos}>
          {oficinas.map((item, index) => (
            <TouchableOpacity key={item.nome} onPress={() => navigation.navigate('Detalhe', { ...item })}>
              <Banner key={index} props={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'home' && styles.tabItemSelected]}
          onPress={() => handleTabPress('home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'perfil' && styles.tabItemSelected]}
          onPress={() => handleTabPress('perfil')}
        >
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'configuracoes' && styles.tabItemSelected]}
          onPress={() => handleTabPress('configuracoes')}
        >
          <Text style={styles.tabText}>Configurações</Text>
        </TouchableOpacity>
      </View>
  
      <View style={styles.rodape}>
        <Text style={styles.textRodape}>App criado por</Text>
        <Text style={styles.textNome}>Camila Rany</Text>
      </View>
    </View>
  );
  }