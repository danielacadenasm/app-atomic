import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.e1}>TUS DATOS</Text>
      <Text style={styles.e2}>HAN SIDO <Text style={styles.e3}>ENVIADOS</Text></Text>
      <Text style={styles.e4}>CON ÉXITO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 15,
  },
  e1: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: -8,
  },
  e2: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: -8,
  },
  e3: {
    color: '#E84F0C',
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: -8,
  },
  e4: {
    color: '#E84F0C',
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Headline;