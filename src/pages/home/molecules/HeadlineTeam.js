import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeadlineTeam = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.e1}>NUESTRO <Text style={styles.e2}>EQUIPO</Text></Text>
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
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  e2: {
    color: '#E84F0C',
    fontFamily: 'Verdana',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default HeadlineTeam;