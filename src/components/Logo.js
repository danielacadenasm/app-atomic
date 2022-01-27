import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/two.png')}
        containerStyle={{
          width: 40,
          height: 40,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Logo;