import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import OrganismEnd from './organisms/OrganismEnd';
import Footer from '../../components/Footer';

const End = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cortado.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
        
        <OrganismEnd/>
        
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

export default End;
