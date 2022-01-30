import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeadlineUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.e1}>¡TE ENCANTARÁ</Text>
      <Text style={styles.e2}>TRABAJAR CON</Text>
      <Text style={styles.e3}>NOSOTROS!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 35,
  },
  e1: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  e2: {
    color: '#E84F0C',
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
});

export default HeadlineUs;