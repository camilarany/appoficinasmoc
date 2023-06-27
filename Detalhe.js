import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Linking } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Banner from './Banner';
import { oficinas } from './Base';
import styles from './style';

export default function Detalhe({ route }) {
  const [rating, setRating] = useState(route.params.estrela); 

  const rate = (value) => {
    setRating(value);
  };
  
  const renderRatingStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? '★' : '☆';
      stars.push(
        <TouchableOpacity key={i} onPress={() => rate(i)}>
          <Text style={styles.starIcon}>{starIcon}</Text>
        </TouchableOpacity>
      );
    }

    return stars;
  };

  const handleLigar = () => {
    const phoneNumber = 'SEU_NÚMERO_DE_TELEFONE'; 
    Linking.openURL(`tel:${route.params.tel}`);
  };

  

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.nome1}>{route.params.nome}</Text>
        <View>
          <Image style={styles.fot} source={route.params.fot} />
        </View>
        <View style={styles.end}>
          <Text style={styles.frase}>{route.params.frase}</Text>
        </View>
        <TouchableOpacity onPress={handleLigar} style={styles.btnLigar}>
          <Text style={styles.text}>Ligar</Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <TouchableOpacity onPress={() => rate(1)}>
            <View style={styles.ratingStarsContainer}>
              {renderRatingStars()}
            </View>
            </TouchableOpacity>
      </View>
      </View>

    </ScrollView>
  );
}