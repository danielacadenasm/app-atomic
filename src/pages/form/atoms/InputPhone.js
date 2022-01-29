import React from 'react';
import { Input, Icon } from 'react-native-elements';

const InputPhone = () => {
return (
  <Input
    label='Número de Celular'
    labelStyle={{
      color: '#fff',
      fontFamily: 'OpenSans',
      fontSize: 18,
      letterSpacing: 1,
      margin: 5,
    }}
    inputContainerStyle={{
      backgroundColor: '#fff',
      margin: 5,
    }}
    rightIcon={
      <Icon
        name='lock'
        size={24}
        color='#9B9B9B'
        style={{marginRight:10}}
      />
    }
  />
);
};

export default InputPhone;