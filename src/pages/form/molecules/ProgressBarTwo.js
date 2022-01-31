import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import * as Progress from 'react-native-progress';

const ProgressBarTwo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgs}>
        <Image
          source={require('../../../assets/images/checkmark.png')}
          style={styles.item}
        />
        <Image
          source={require('../../../assets/images/twoborder.png')}
          style={styles.item}
        />
      </View>

      <Progress.Bar progress={1} width={350} color='#E84F0C' unfilledColor='#fff' height={12} borderRadius={5} borderWidth={0} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 20,
    },
    imgs: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    item: {
      width: 30,
      height: 30,
      marginVertical: 5,
      marginHorizontal: 80,
    },
  });

export default ProgressBarTwo;