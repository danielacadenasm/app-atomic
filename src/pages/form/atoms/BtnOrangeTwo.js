import React from 'react';
import { Button } from 'react-native-elements';

const BtnOrangeTwo = () => {
  return (
    <Button
      title='Continuar'
      buttonStyle={{
        backgroundColor: '#E84F0C',
        borderRadius: 30,
        height: 45,
        width: 220,
        marginTop: 25,
      }}
      titleStyle={{
        fontFamily: 'OpenSans',
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
      }}
      containerStyle={{
        alignItems: 'center',
      }}
    />
  );
};

export default BtnOrangeTwo;