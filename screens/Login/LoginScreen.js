import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dummyCredentials = [
    { username: 'abc@xyz.com', password: 'qwerty' },
    { username: 'ros@xyz.com', password: '123456' },
    { username: 'aff@xyz.com', password: '098765' },
  ];

  const handleLogin = () => {
    const validCredentials = dummyCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    
    if (validCredentials) {
      Toast.show({
        type: 'success',
        text1: 'Logged In',
        visibilityTime: 3000,
      });
      navigation.navigate('Home');

      
    } else {
      setError('Username or password is incorrect');
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        visibilityTime: 3000,
      });
    }
  };

  useEffect(() => {
    setUsername('');
    setPassword('');
    setError('');
  }, []);

  

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <TextInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
        {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
  },
  centeredView: {
    marginTop: '15%',
    width: '90%',
  },
});

export default LoginScreen;
