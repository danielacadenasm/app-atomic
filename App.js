/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/assets/images/fondo.png')}
        style={styles.image}
      >
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: -5
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default App;
