import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.address}>#1114 World Trade Tower, WTT Sec 16, Plot No.1</Text>
        <Text style={styles.address}>Noida, Uttar Pradesh 201301</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.contactLabel}>Contact Number:</Text>
        <Text style={styles.contactNumber}>+91-9311431087</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.contactLabel}>Email:</Text>
        <Text style={styles.email}>info@affinityeducation.in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    marginBottom: 16,
  },
  address: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  contactNumber: {
    fontSize: 16,
    color: '#555',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactUsScreen;
