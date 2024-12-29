
import React, { useContext, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
    Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { AuthContext } from '~/context/AuthContext';


import { PermissionsAndroid } from 'react-native';
import Doc from '~/components/DocumentScanner';

function HomeScreen({ navigation }: any): React.JSX.Element {
  const {user,loading ,logout} = useContext(AuthContext);


  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app requires access to your camera to scan documents.',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied', 'Camera permission is required.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  useEffect(() => {
    requestCameraPermission();
  }, []);
  

  return (
     <SafeAreaView >
 <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       
        >

        <View>
         {/*  {user ? (
              <>
              <Text>Welcome {user.email}</Text>
              <Button onPress={() => logout()}  title='Logout' />
              </>
              ):(
                <Button onPress={() => navigation.navigate('Login')} title="Login"  />
                )}
                */}
            <Doc/>
            
        </View>
                </ScrollView>
    </SafeAreaView>
     
  );
}


export default HomeScreen;
