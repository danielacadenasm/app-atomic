import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image } from 'react-native';

const services = [
  {
    key: '1',
    title: 'IMAGINA',
    img: require('../../../assets/images/1.png'),
    subtitle: '•  Estrategia Digital\n\n•  Big Data & Analysis\n\n•  Consultoría Tecnológica\n\n•  Reducción de costos TI\n',
  },
  {
    key: '2',
    title: 'EXPLORA',
    img: require('../../../assets/images/2.png'),
    subtitle: '•  Innovación y creación\n   tecnológica\n\n•  UI / UX\n\n•  Innovación\n',
  },
  {
    key: '3',
    title: 'CONQUISTA',
    img: require('../../../assets/images/3.png'),
    subtitle: '•  Desarrollo tecnológico\n   y creación tecnológica\n\n•  Ciberseguridad\n\n•  Servicios de la Nube\n',
  },
];

const CardOrange = () => {

  const Services = ({item}) => (
    <View style={styles.item}>
      <Image
        source={item.img}
        style={{ width: 220, height: 220 }}
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
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#E84F0C',
    width: 360,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'OpenSans',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  }
});

export default CardOrange;