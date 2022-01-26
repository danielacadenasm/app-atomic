import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';

const Logo = () => {
  return (
    <View styles={{ alignItems:'center' }}>
      <Image
        source={require('../assets/images/dos.png')}
        containerStyle={{
            width: 50,
            height: 50,
        }}
      />
    </View>
  );
};

export default Logo;