
import { GoogleSignin, GoogleSigninButton, statusCodes,  } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CenteredOr from '~/components/CentredOr';


export default function LoginScreen({navigation}: any): React.JSX.Element {
    const [userInfo, setUserInfo] = useState(null);

    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '1018149628451-n3n7fqgom93sdjev1jt5pth31jv24bn6.apps.googleusercontent.com', 
          offlineAccess: true, 
          scopes: ['profile', 'email'],
        });
      }, []);

      /*
        * Sign in with Google    
      */
    
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

        <Text style={styles.welcome}>The pharmacy at your fingertips</Text>
        {/* <Text style={styles.title}>IPHA</Text> */}
      
 
    <GoogleSigninButton
        onPress={() => signIn()}
        style={{ width: '100%', height: 56, maxWidth:500 ,marginBottom: 15}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      
    /> 
        <CenteredOr/>
        
        <TextInput 
            keyboardType='email-address'
            onChangeText={setEmail}
            placeholder='Email'
            value= {email}
            style={styles.input}
            
            />

        {/* <TextInput 
            onChangeText={setPassword}
            placeholder='password'
            secureTextEntry
            style={styles.input}
            value= {password}
            /> */}
        <View >

         
        </View>

          {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

         {/* Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUp}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>

    </View>
 
);
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2', // Google's blue color
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    container: {
      flex: 1,
      backgroundColor: '',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: 40,
    },
    welcome: {
      fontSize: 28,
      fontWeight: '300',
      color: 'gray',
      marginBottom: 40,
    },
    appleButton: {
      backgroundColor: '#333',
      padding: 15,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    appleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    orText: {
      fontSize: 16,
      color: '#343a40',
      marginVertical: 10,
    },
     input: {
        color: '#343a40',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        width: '100%',
        height: 60,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
      },
  

    loginButton: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: '#007bff',
      padding: 12,
      borderRadius: 5,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#343a40',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      marginRight: 10,
      
    },
    googleButton: {
        backgroundColor: '#4285F4',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginTop: 20,
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
        color: '#fff',
      },
      forgotPassword: {
        fontSize: 16,
        color: '#343a40',
        marginBottom: 20,
      },
      signUp: {
        fontSize: 16,
        color: '#343a40',
        marginTop: 10,
      },
      signUpLink: {
        color: '#1e90ff',
        fontWeight: 'bold',
      },
  });

  