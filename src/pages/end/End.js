import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Logo from '../../components/Logo';
import Headline from './molecules/Headline';
import Message from './atoms/Message';
import ImgAstronaut from './atoms/ImgAstronaut';

import Footer from '../../components/Footer';

const End = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cortado.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
        <Headline/>
        <Message/>
        <ImgAstronaut/>
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
