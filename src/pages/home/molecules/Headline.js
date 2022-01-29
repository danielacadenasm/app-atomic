import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.e1}>Desarrolla todo</Text>
      <Text style={styles.e2}>tu POTENCIAL</Text>
      <Text style={styles.e3}>dentro del equipo</Text>
      <Text style={styles.e4}><Text style={styles.e5}>ATOMIC</Text>LABS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  e1: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -10,
    letterSpacing: 2,
  },
  e2: {
    color: '#E84F0C',
    fontFamily: 'OpenSans',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -10,
    letterSpacing: 4,
  },
  e3: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -10,
    letterSpacing: -1,
  },
  e4: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 45,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 7,
  },
  e5: {
    color: '#E84F0C',
    fontFamily: 'OpenSans',
    fontSize: 45,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});

export default Headline;