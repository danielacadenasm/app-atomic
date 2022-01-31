import React from 'react';
import { ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Logo from '../../components/Logo';
import Inputs from './organisms/Inputs';
import Footer from '../../components/Footer';

const Form = () => {

  return (
    <ImageBackground
      source={require('../../assets/images/fondo.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
        <Inputs/>
        <Footer/>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Form;
