import React from 'react';
import { Button } from 'react-native-elements';

const BtnOrange = () => {
  return (
    <Button
      title='Enviar'
      buttonStyle={{
        backgroundColor: '#E84F0C',
        borderRadius: 30,
        height: 45,
        width: 210,
        marginTop: 25,
        marginBottom: 10,
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

export default BtnOrange;