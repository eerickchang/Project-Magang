import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const TextInput = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title} </Text>
      <Gap height={23} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 49,
    width: 261,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 49,
    marginRight: 50,
  },
  txt: {
    marginTop: 13,
    marginLeft: 10,
    marginBottom: 9,
  },
});
