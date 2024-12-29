import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

function GoogleButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.googleButton} onPress={onPress}>
      <Image
        source={{
          uri: 'https://fr.m.wikipedia.org/wiki/Fichier:Google_%22G%22_logo.svg',
        }}
        style={styles.googleIcon}
      />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
}

export default GoogleButton;

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#ddd', // Light border for definition
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 16,
  },
  googleIcon: {
    width: 24,  // Adjust the width and height based on the logo
    height: 24,
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444', // Dark text for readability
  },
});
