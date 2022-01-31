import React from 'react';
import { View } from 'react-native';
import HeadlineTeam from '../atoms/HeadlineTeam';
import CardTeam from '../molecules/CardTeam';

const OrganismTeam = () => {
  return (
    <View>
      <HeadlineTeam/>
      <CardTeam/>        
    </View>
  );
};

export default OrganismTeam;