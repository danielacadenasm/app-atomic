import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Image } from 'react-native-elements';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text_footer_up}>© 2020 AtomicLabs. Todos los derechos reservados.</Text>
      <Text style={styles.text_footer_down}>Aviso de privacidad</Text>

      <View style={styles.imgs}>
        <Image
          source={require('../assets/images/linkedin.png')}
          containerStyle={styles.item}
        />
        <Image
          source={require('../assets/images/twitter.png')}
          containerStyle={styles.item}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 190,
  },
  text_footer_up: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Verdana',
    marginTop: 30,
  },
  text_footer_down: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Verdana',
    marginTop: 30,
    textDecorationLine: 'underline',
  },
  imgs: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    marginTop: 30,
  },
});

export default Footer;