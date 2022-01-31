import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';

const Steps = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/steps.png')}
        style={{
          width: 380,
          height: 110,
        }}
      />

      <View style={styles.containerTxt}>
        <Text style={styles.txt1}>Contratación{"\n"}remota</Text>
        <Icon style={styles.icon} name='arrow-forward' color='#E84F0C' size={15} />
        <Text style={styles.txt2}>Entrevista con{"\n"}el área de RH</Text>
        <Icon style={styles.icon} name='arrow-forward' color='#E84F0C' size={15} />
        <Text style={styles.txt3}>Prueba{"\n"}práctica</Text>
        <Icon style={styles.icon} name='arrow-forward' color='#E84F0C' size={15} />
        <Text style={styles.txt4}>Entrevista{"\n"}técnica</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
  containerTxt: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  txt1: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    color: '#fff',
    flex: 0.22,
  },
  txt2: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    color: '#fff',
    flex: 0.25,
  },
  txt3: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    color: '#fff',
    flex: 0.15,
  },
  txt4: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    color: '#fff',
    flex: 0.18,
  },
  icon: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  }
});

export default Steps;