import React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import OrganismMain from './organisms/OrganismMain';
import OrganismTechnology from './organisms/OrganismTechnology';
import OrganismUs from './organisms/OrganismUs';
import OrganismTeam from './organisms/OrganismTeam';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cortado.png')}
      style={styles.image}
    >
      <ScrollView style={styles.container}>
        <Logo/>
          <OrganismMain/>
          <OrganismTechnology/>
          <OrganismUs/>
          <OrganismTeam/>
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
