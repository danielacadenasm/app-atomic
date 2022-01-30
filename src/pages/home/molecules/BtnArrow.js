import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const BtnArrow = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      //onPress={window.location.href = 'HeadlineTechnology.js'}
    >
      <Avatar
        size={50}
        rounded
        source={require('../../../assets/images/arrow.png')}
      />
      <Text style={styles.txt}>Quiero saber más</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  txt: {
    fontFamily: 'OpenSans',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BtnArrow;