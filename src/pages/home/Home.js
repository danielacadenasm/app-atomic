import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import Headline from './molecules/Headline';
import BtnArrow from './molecules/BtnArrow';
import ImgAstronaut from './atoms/ImgAstronaut';
import BtnWhite from './atoms/BtnWhite';
import HeadlineTechnology from './molecules/HeadlineTechnology';
import CardOrange from './molecules/CardOrange';
import HeadlineUs from './molecules/HeadlineUs';
import Steps from './molecules/Steps';
import HeadlineTeam from './atoms/HeadlineTeam';
import CardTeam from './molecules/CardTeam';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cortado.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
        <Headline/>
        <BtnArrow/>
        <ImgAstronaut/>
        <BtnWhite/>
        <HeadlineTechnology/>
        <CardOrange/>
        <HeadlineUs/>
        <Steps/>
        <BtnWhite/>
        <HeadlineTeam/>
        <CardTeam/>
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

export default Home;
