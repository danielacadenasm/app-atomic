import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeadlineTechnology = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.e1}>SOMOS EL BRAZO</Text>
      <Text style={styles.e2}>DERECHO <Text style={styles.e3}>DE LA</Text></Text>
      <Text style={styles.e4}>TECNOLOGÍA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 35,
  },
  e1: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  e2: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  e3: {
    color: '#E84F0C',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  e4: {
    color: '#E84F0C',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default HeadlineTechnology;