import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import Logout from '../Logout/Logout';

const HotelBookingScreen = ({ route, navigation }) => {
  const { hotel } = route.params;

  const [name, setName] = useState('');
  const [noOfPersons, setNoOfPersons] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const submitForm = () => {
    if (!name || !noOfPersons || !phone || !email || !selectedPrice) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    console.log('Form submitted for hotel:', hotel.name);

    Toast.show({
      type: 'success',
      text1: 'Submitted',
      visibilityTime: 3000,
    });

    setSubmissionMessage('Hotel booked successfully. Details will be sent to your email, Thanks!');
    setName('');
    setNoOfPersons('');
    setPhone('');
    setEmail('');
    setSelectedPrice('');
  };

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>Book Hotel</Text>
      <Text style={styles.hotelName}>{hotel.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="No. of Persons"
        value={noOfPersons}
        onChangeText={(text) => setNoOfPersons(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone no"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email id"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      
      <Text style={styles.label}>Select Price(Per Room):</Text>
      <View style={styles.price}>
        <TouchableOpacity
          style={[
            styles.priceButton,
            selectedPrice === '1500' && styles.selectedPrice,
          ]}
          onPress={() => setSelectedPrice('1500')}
        >
          <Text>₹1500</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.priceButton,
            selectedPrice === '2500' && styles.selectedPrice,
          ]}
          onPress={() => setSelectedPrice('2500')}
        >
          <Text>₹2500</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.priceButton,
            selectedPrice === '5000' && styles.selectedPrice,
          ]}
          onPress={() => setSelectedPrice('5000')}
        >
          <Text>₹5000</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={submitForm} />
      {submissionMessage ? (
        <View>
          <Text style={styles.successMessage}>{submissionMessage}</Text>
          <Text style={styles.successMessage}>Booked</Text>
        </View>
      ) : null}

      <View style={styles.logoutContainer}>
        <Logout title="Home" navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  successMessage: {
    marginTop: 16,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  selectedPrice: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default HotelBookingScreen;
