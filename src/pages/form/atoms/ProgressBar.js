import React from "react";
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.5} width={350} color='#E84F0C' unfilledColor='#fff' height={12} borderRadius={5} borderWidth={0} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 20,
    },
  });

export default ProgressBar;