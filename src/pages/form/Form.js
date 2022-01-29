import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Logo from '../../components/Logo';
import HeadlineFormOne from './molecules/HeadlineFormOne';
import HeadlineFormTwo from './molecules/HeadlineFormTwo';
import Message from './atoms/Message';
import InputNames from './atoms/InputNames';
import InputLastNames from './atoms/InputLastNames';
import BtnOrange from './atoms/BtnOrange';
import ImgAstronaut from './atoms/ImgAstronaut';

import Footer from '../../components/Footer';

const Form = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cortado.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
        <HeadlineFormOne/>
        <Message/>
        <InputNames/>
        <InputLastNames/>
        <BtnOrange/>
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

export default Form;
