import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios, {Axios} from 'axios';
import {Button} from '../../components';

const ReferensiAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    //Axios
    axios.get('http://10.0.2.2:3004/users').then(res => setUsers(res.data));
  }, [users]);

  const handleOnPress = () => {
    const data = {
      email: 'changerick77@gmail.com',
      first_name: 'erick',
      last_name: 'chang',
      avatar: 'https://reqres.in/img/faces/10-image.jpg',
    };
    axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>HomeScreen</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: 360}}>
        <Button onPress={handleOnPress} />
        {users.map(item => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.txtName}>
              {`${item.first_name} ${item.last_name}`}
            </Text>
            <Text style={styles.txtEmail}>{item.email}</Text>
            <Image style={styles.image} source={{uri: `${item.avatar}`}} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ReferensiAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  txt: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  txtName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  txtEmail: {
    fontSize: 16,
    color: '#000',
    color: 'grey',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
});
