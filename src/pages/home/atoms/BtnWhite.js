import React from 'react';
import { Button } from 'react-native-elements';

const BtnWhite = () => {
  return (
    <Button
      title='¡Quiero ser parte!'
      buttonStyle={{
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 60,
        width: 200,
        marginVertical: 10,
      }}
      titleStyle={{
        fontFamily: 'OpenSans',
        fontSize: 18,
        color: '#006EA0',
        fontWeight: 'bold',
      }}
      containerStyle={{
        alignItems: 'center',
      }}
    />
  );
};

export default BtnWhite;