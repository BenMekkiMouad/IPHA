import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1018149628451-n3n7fqgom93sdjev1jt5pth31jv24bn6.apps.googleusercontent.com', 
      offlineAccess: true, 
      scopes: ['profile', 'email'],
    });
  }, []);

  const handleRegister = () => {
    // Handle register logic (e.g., Firebase, API call)
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    console.log('Registration Attempted');
  };

  const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices(); 
        const response : any = await GoogleSignin.signIn();
        console.log(response);
        setUserInfo(response);
        navigation.navigate('Home');

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Google Sign-In was cancelled.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign in is in progress already.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'An error occurred during Google Sign-In.');

      } else {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>


      <GoogleSigninButton
        onPress={() => signIn()}
        style={{ width: '100%', height: 56, maxWidth:500 ,marginBottom: 15}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      
      /> 
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RegisterScreen;
