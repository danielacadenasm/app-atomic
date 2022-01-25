import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Footer} from './src/components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('./src/assets/images/fondo.png')}
          style={styles.image}
        >
        </Image>
        <Footer></Footer>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});

export default App;
