import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BorderSelectUser, Gap} from '../../components';
import {SelectOwner, SelectPenyewa} from '../../assets';

const SelectUser = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Gap height={78} />
        <Text style={styles.txt}>Hi there!</Text>
        <Text style={styles.txt1}>Welcome.</Text>
        <Gap height={17} />
        <Text style={styles.txt2}>Please select user</Text>
        <Gap height={16} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginUser')}>
          <BorderSelectUser icons={<SelectPenyewa />} title="User" />
        </TouchableOpacity>
        <Gap height={24} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginOwner')}>
          <BorderSelectUser
            icons={<SelectOwner />}
            title="Owner"
            backgroundColor="#8FFF00"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  txt: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  container: {
    backgroundColor: 'white',
    height: 640,
    width: 360,
  },
  txt1: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  txt2: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  container2: {
    marginLeft: 50,
  },
});
