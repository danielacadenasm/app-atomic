import React from 'react';
import { View } from 'react-native';
import ProgressBarTwo from '../molecules/ProgressBarTwo' ;
import HeadlineFormTwo from '../molecules/HeadlineFormTwo';
import MessageTwo from '../atoms/MessageTwo';

const OrganismPhone = () => {
  return (
    <View>
      <ProgressBarTwo/>
      <HeadlineFormTwo/>
      <MessageTwo/>
    </View>
  );
};

export default OrganismPhone;