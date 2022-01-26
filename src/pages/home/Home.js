import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Footer from '../../components/Footer';
import BtnPpal from '../../components/BtnPpal';
import Logo from '../../components/Logo';
import Encabezado from './molecules/Encabezado';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/fondo.png')}
      style={styles.image}
    >
      <ScrollView>
        <Encabezado></Encabezado>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <BtnPpal></BtnPpal>
        <Footer></Footer>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    marginTop: -2,
  },
});

export default Home;
