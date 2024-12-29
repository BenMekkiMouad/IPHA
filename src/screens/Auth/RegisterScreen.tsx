import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1018149628451-n3n7fqgom93sdjev1jt5pth31jv24bn6.apps.googleusercontent.com', 
      offlineAccess: true, 
      scopes: ['profile', 'email'],
    });
  }, []);

  const handleRegister = () => {
  
    console.log('Registration Attempted');
  };

  const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices(); 
        const response : any = await GoogleSignin.signIn();
        console.log(response);
        setUserInfo(response);
        navigation.navigate('App');

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

    {/*   <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />
      <View style={[styles.circle, styles.circle4]} /> */}
      
      <GoogleSigninButton
        onPress={() => signIn()}
        style={{ width: '100%', height: 56, maxWidth:500 ,marginBottom: 15}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      
      /> 
      <Text style={styles.title}>Join so we remember you</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
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
      
      <TouchableOpacity style={styles.nextButton} onPress={handleRegister}>
        <Text style={styles.nextButtonText}> Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor :'#f0f4f8'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    color: '#343a40',
    backgroundColor:'#f0f4f8',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    height: 60,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#00aa82',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
 
  circle: {
    position: 'absolute',
  },
  circle1: {
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: '#FFB6C1', // Light Pink
    top: -100,
    left: -80,
    opacity: 0.4,
  },
  circle2: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#87CEFA', // Light Sky Blue
    top: 150,
    right: -100,
    opacity: 0.5,
  },
  circle3: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#FFD700', // Golden Yellow
    bottom: -120,
    left: -50,
    opacity: 0.3,
  },
  circle4: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#90EE90', // Light Green
    bottom: 50,
    right: 30,
    opacity: 0.4,
  },
  content: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333', // Dark Gray for contrast
    fontWeight: 'bold',
  },

});

export default RegisterScreen;
