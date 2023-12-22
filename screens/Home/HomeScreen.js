import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Logout from '../Logout/Logout'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <TouchableOpacity style={[styles.card,
      { backgroundColor: 'rgb(252, 236, 95)' }]}
        onPress={() => navigation.navigate('Schools')}>
        <Text style={styles.cardText}>Schools</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card,
      { backgroundColor: '#87CE' }]}
        onPress={() => navigation.navigate('Colleges')}>
        <Text style={styles.cardText}>Colleges</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card,
      { backgroundColor: 'rgb(223, 105, 82)' }]}
        onPress={() => navigation.navigate('Hotels')}>
        <Text style={styles.cardText}>Hotels</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card,
      { backgroundColor: 'rgb(86, 158, 117)' }]}
        onPress={() => navigation.navigate('Cities')}>
        <Text style={styles.cardText}>Cities</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card,
        { backgroundColor: 'rgb(128, 128, 128)' }]}
        onPress={() => navigation.navigate('ContactUs')}
      >
        <Text style={styles.cardText}>Contact Us</Text>
      </TouchableOpacity>

      <Logout title="Home" navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  card: {
    width: '45%',
    aspectRatio: 0.8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
