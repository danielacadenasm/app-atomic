import React from 'react';
import { View } from 'react-native';
import Headline from '../molecules/Headline';
import BtnArrow from '../molecules/BtnArrow';
import ImgAstronaut from '../atoms/ImgAstronaut';
import BtnWhite from '../atoms/BtnWhite';

const OrganismMain = () => {
  return (
    <View>
      <Headline/>
      <BtnArrow/>
      <ImgAstronaut/>
      <BtnWhite/>
    </View>
  );
};

export default OrganismMain;