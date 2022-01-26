import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = () => {
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
    fontFamily: 'Verdana',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -15,
  },
  e2: {
    color: '#E84F0C',
    fontFamily: 'Verdana',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -15,
  },
  e3: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: -15,
  },
  e4: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 45,
    fontWeight: 'bold',
  },
  e5: {
    color: '#E84F0C',
    fontFamily: 'Verdana',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default Encabezado;