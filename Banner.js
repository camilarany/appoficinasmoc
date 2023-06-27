import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Banner({ props }) {
  const [showMore, setShowMore] = useState(false); 

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={[styles.bloco,styles]}>
      <View style={styles.conteudo}>
        <View style={styles.imagem}>
          <Image style={styles.logo} source={props.foto} />
        </View>

        <View style={styles.cont}>
          <Text style={styles.nome}>{props.nome}</Text>
          {showMore ? (
            <Text style={styles.esp}>{props.endereco}</Text>
          ) : (
            <Text style={styles.esp} numberOfLines={2}>
              {props.endereco}
            </Text>
          )}
          <TouchableOpacity onPress={toggleShowMore} style={styles.verMaisButton}>
            <Text style={styles.verMaisText}>
              {showMore ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}