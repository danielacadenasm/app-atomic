import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const Steps = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/steps.png')}
        containerStyle={{
          width: 380,
          height: 110,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Steps;