import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const ImgAstronaut = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/form.png')}
        containerStyle={{
          width: '100%',
          height: 410,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default ImgAstronaut;