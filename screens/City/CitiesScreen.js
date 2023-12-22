import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CitiesScreen = () => {
  const stateCapitals = [
    { state: 'Andhra Pradesh', capital: 'Amaravati' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar' },
    { state: 'Assam', capital: 'Dispur' },
    { state: 'Bihar', capital: 'Patna' },
    { state: 'Chhattisgarh', capital: 'Raipur' },
    { state: 'Goa', capital: 'Panaji' },
    { state: 'Gujarat', capital: 'Gandhinagar' },
    { state: 'Haryana', capital: 'Chandigarh' },
    { state: 'Himachal Pradesh', capital: 'Shimla' },
    { state: 'Jharkhand', capital: 'Ranchi' },
    { state: 'Karnataka', capital: 'Bengaluru' },
    { state: 'Kerala', capital: 'Thiruvananthapuram' },
    { state: 'Madhya Pradesh', capital: 'Bhopal' },
    { state: 'Maharashtra', capital: 'Mumbai' },
    { state: 'Manipur', capital: 'Imphal' },
    { state: 'Meghalaya', capital: 'Shillong' },
    { state: 'Mizoram', capital: 'Aizawl' },
    { state: 'Nagaland', capital: 'Kohima' },
    { state: 'Odisha', capital: 'Bhubaneswar' },
    { state: 'Punjab', capital: 'Chandigarh' },
    { state: 'Rajasthan', capital: 'Jaipur' },
    { state: 'Sikkim', capital: 'Gangtok' },
    { state: 'Tamil Nadu', capital: 'Chennai' },
    { state: 'Telangana', capital: 'Hyderabad' },
    { state: 'Tripura', capital: 'Agartala' },
    { state: 'Uttar Pradesh', capital: 'Lucknow' },
    { state: 'Uttarakhand', capital: 'Dehradun' },
    { state: 'West Bengal', capital: 'Kolkata' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {stateCapitals.map((pair) => (

        <View style={styles.cityItem} key={pair.state}>

          <Text style={styles.state}>{pair.state}</Text>
          <Text style={styles.capital}>{pair.capital}</Text>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cityItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  state: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  capital: {
    fontSize: 16,
    color: '#555',
  },
});

export default CitiesScreen;