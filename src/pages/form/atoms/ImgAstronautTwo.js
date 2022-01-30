import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const ImgAstronautTwo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/phone.png')}
        containerStyle={{
          width: '100%',
          height: 500,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 10,
  },
});

export default ImgAstronautTwo;