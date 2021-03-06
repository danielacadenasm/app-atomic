import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        containerStyle={{
          width: 120,
          height: 55,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default Logo;