import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const services = [
  {
    key: '1',
    title: 'IMAGINA',
    image: 'require("../../../assets/images/1.png")',
  },
  {
    key: '2',
    title: 'EXPLORA',
    image: '../../../assets/images/2.png',
  },
  {
    key: '3',
    title: 'CONQUISTA',
    image: '../../../assets/images/3.png',
  },
];

const CardOrange = () => {

  const Services = ({title, image}) => (
    <View style={styles.item}>
      <Image
          source={image}
          containerStyle={{
              width: 70,
              height: 70,
          }}/>
      <Text style={styles.title}>{title}</Text>
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
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 30,
    color: '#fff',
  },
});

export default CardOrange;