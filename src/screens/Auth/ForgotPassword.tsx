import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    // Simulate API call or navigation
    Alert.alert('Password Reset', 'If this email is associated with an account, you will receive a reset link.');
    navigation.goBack(); // Navigate back to login or main screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your IPHA Account</Text>
      <Text style={styles.subtitle}>
        Enter the email associated with your account to reset your password.
      </Text>
      <TextInput
        keyboardType="email-address"
        onChangeText={(text) => {
          setEmail(text);
          setError('');
        }}
        placeholder="Email"
        value={email}
        style={[styles.input, error && styles.inputError]}
        autoCapitalize="none"
        placeholderTextColor="#adb5bd"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderRadius: 8,
    borderColor: '#ced4da',
    borderWidth: 1,
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#343a40',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
