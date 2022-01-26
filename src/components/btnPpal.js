import React from 'react';
import { Button } from 'react-native-elements';

const BtnPpal = () => {
  return (
    <Button
      title='¡Quiero ser parte!'
      buttonStyle={{
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 60,
        width: 220,
        margin: 10,
      }}
      titleStyle={{
        fontFamily: 'Verdana',
        fontSize: 20,
        color: '#006EA0',
        fontWeight: 'bold',
      }}
      containerStyle={{
        alignItems: 'center',
      }}
    />
  );
};

export default BtnPpal;