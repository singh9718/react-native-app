import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import Logout from '../Logout/Logout'

const SchoolDetailsScreen = ({ route, navigation }) => {
  const { school } = route.params;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classToAdmit, setClassToAdmit] = useState('');
  const [phone, setPhone] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const isAlphabetic = (str) => /^[a-zA-Z\s]+$/.test(str);

  const isNumeric = (str) => /^[0-9]+$/.test(str);

  const isValidClass = (cls) => /^[1-9]|1[0-2]$/.test(cls);

  const isValidPhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const submitForm = () => {
    if (!isAlphabetic(name)) {
      Alert.alert('Error', 'Please enter a valid name with alphabets and spaces only');
      return;
    }

    if (!isNumeric(age)) {
      Alert.alert('Error', 'Please enter a valid age with numeric digits only');
      return;
    }

    if (!isValidClass(classToAdmit)) {
      Alert.alert('Error', 'Please enter a valid class between 1 and 12');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }

    console.log('Form submitted for:', school.name);

    Toast.show({
      type: 'success',
      text1: 'Enquiry Form Submitted',
      visibilityTime: 3000,
    });

    setSubmissionMessage('Someone from School administration will contact you soon. Thanks!');
    setName('');
    setAge('');
    setClassToAdmit('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Enquiry Form</Text>
      <Text style={styles.schoolName}>{school.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name of student"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age of student"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Class to take admission"
        value={classToAdmit}
        onChangeText={(text) => setClassToAdmit(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={submitForm} />
      {submissionMessage ? <Text style={styles.successMessage}>{submissionMessage}</Text> : null}

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
  schoolName: {
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
  successMessage: {
    marginTop: 16,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default SchoolDetailsScreen;
