import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        En breve recibirás un correo de{"\n"}
        confirmación por parte del equipo de{"\n"}
        AtomicLabs.{"\n"}
        {"\n"}
        Recuerda revisar tu bandeja de SPAM{"\n"}
        ¡Esperamos verte pronto!
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