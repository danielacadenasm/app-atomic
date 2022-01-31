import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image } from 'react-native';

const services = [
  {
    key: '1',
    title: 'Ramón Gómez',
    img: require('../../../assets/images/ramon.png'),
    subtitle: 'Front-end developer',
  },
  {
    key: '2',
    title: 'Ximena Mejía',
    img: require('../../../assets/images/ximena.png'),
    subtitle: 'UX Designer',
  },
  {
    key: '3',
    title: 'Jaime Domínguez',
    img: require('../../../assets/images/jaime.png'),
    subtitle: 'Back-end developer',
  },
];

const CardTeam = () => {

  const Services = ({item}) => (
    <View style={styles.item}>
      <Image
        source={item.img}
        style={{ width: 150, height: 150, marginBottom: 15 }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={services}
        renderItem={({item}) => <Services item={item} />}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 50,
  },
  item: {
    backgroundColor: '#145A96',
    width: 360,
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 16,
    color: '#fff',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 1,
  }
});

export default CardTeam;