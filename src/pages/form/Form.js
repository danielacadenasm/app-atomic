import React from 'react';
import { ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Logo from '../../components/Logo';
import ProgressBar from './atoms/ProgressBar';
import ProgressBarTwo from './atoms/ProgressBarTwo';
import HeadlineFormOne from './molecules/HeadlineFormOne';
import HeadlineFormTwo from './molecules/HeadlineFormTwo';
import Message from './atoms/Message';
import MessageTwo from './atoms/MessageTwo';
import InputNames from './molecules/InputNames';
import InputPhone from './atoms/InputPhone';
import BtnOrange from './atoms/BtnOrange';
import BtnOrangeTwo from './atoms/BtnOrangeTwo';
import ImgAstronaut from './atoms/ImgAstronaut';
import ImgAstronautTwo from './atoms/ImgAstronautTwo';
import Footer from '../../components/Footer';

const Form = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/fondo.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>

        <ProgressBar/>
        <HeadlineFormOne/>
        <Message/>
        <InputNames/>
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
