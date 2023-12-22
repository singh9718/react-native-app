import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import Logout from '../Logout/Logout'

const CollegeEnquiryScreen = ({ route, navigation }) => {
  const { college } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const submitForm = () => {
    if (!name || !phone || !email || !courses) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    console.log('Form submitted for:', college.name);

    Toast.show({
      type: 'success',
      text1: 'Enquiry Form Submitted',
      visibilityTime: 3000,
    });

    setSubmissionMessage('College Administrattion will contact you soon, Thanks!');
    setName('');
    setPhone('');
    setEmail('');
    setCourses('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enquiry Form</Text>
      <Text style={styles.collegeName}>{college.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name of student"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Courses to take admission"
        value={courses}
        onChangeText={(text) => setCourses(text)}
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
  collegeName: {
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

export default CollegeEnquiryScreen;
