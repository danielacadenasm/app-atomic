import React from 'react';
import { View } from 'react-native';
import Headline from '../molecules/Headline';
import Message from '../atoms/Message';
import ImgAstronaut from '../atoms/ImgAstronaut';

const OrganismEnd = () => {
  return (
    <View>
      <Headline/>
      <Message/>
      <ImgAstronaut/>
    </View>
  );
};

export default OrganismEnd;