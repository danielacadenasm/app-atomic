import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const HeadlineFormTwo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txt1}>
        <Image
          source={require('../../../assets/images/two.png')}
          containerStyle={{
            width: 45,
            height: 45,
          }}
        />
      </View>

      <View style={styles.txt2}>
        <Text style={styles.e1}>VALIDA TU</Text>
        <Text style={styles.e2}>CELULAR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    flexDirection: 'row',
    flex: 1,
  },
  txt1: {
    flex: 0.3,
    alignItems: 'center',
  },
  txt2: {
    flex: 0.7,
  },
  e1: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: -8,
  },
  e2: {
    color: '#E84F0C',
    fontFamily: 'OpenSans',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default HeadlineFormTwo;