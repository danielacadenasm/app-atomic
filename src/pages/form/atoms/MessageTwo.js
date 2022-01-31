import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Necesitamos validar tu número para{"\n"}
        continuar{"\n"}
        {"\n"}
        Ingresa tu número a 10 dígitos y te{"\n"}
        enviaremos un código SMS.{"\n"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  txt: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    color: '#fff',
  },
});

export default MessageTwo;