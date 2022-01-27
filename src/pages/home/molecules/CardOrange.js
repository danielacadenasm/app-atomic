import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Image } from 'react-native-elements';

const DATA = [
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
// como sería la tarjeta
const Item = ({ title, image }) => (
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

const CardOrange = () => {

  const renderItem = ({ item }) => (
    <Item
    title={item.title}
    image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff',
  },
});

export default CardOrange;