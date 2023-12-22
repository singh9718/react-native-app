import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const Logout = ({ navigation }) => {
    const handleLogout = () => {
        Toast.show({
            type: 'info',
            text1: 'Logged Out',
            visibilityTime: 3000,
        });
        navigation.navigate('Login');
    };

    return (

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
      
    );
};

const styles = StyleSheet.create({

    logoutButton: {
        width: '80%',
        backgroundColor: 'red',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        paddingVertical: 12,
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Logout;
