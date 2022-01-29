import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Queremos saber que eres tú, por favor{"\n"}
        ingresa los siguientes datos:{"\n"}
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

export default Message;