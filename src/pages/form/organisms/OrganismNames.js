import React from 'react';
import { View } from 'react-native';
import ProgressBar from '../molecules/ProgressBar';
import HeadlineForm from '../molecules/HeadlineForm';
import Message from '../atoms/Message';

const OrganismNames = () => {
  return (
    <View>
      <ProgressBar/>
      <HeadlineForm/>
      <Message/>
    </View>
  );
};

export default OrganismNames;