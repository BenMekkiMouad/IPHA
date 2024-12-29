import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  View 
} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import Icon from 'react-native-vector-icons/FontAwesome';

const Doc = () => {
  const [scannedImage, setScannedImage] = useState<string | undefined>(undefined);

  const scanDocument = async () => {
    try {
      const { scannedImages } = await DocumentScanner.scanDocument();

      if (scannedImages && scannedImages.length > 0) {
        setScannedImage(scannedImages[0]);
      }
    } catch (error) {
      console.error('Document scan failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.scanButton} 
        onPress={scanDocument} 
        activeOpacity={0.7} // Adjust opacity as needed
      >
        <Icon name="camera" size={20} color="white" /> 
        <Text style={styles.buttonText}> Scan</Text>
      </TouchableOpacity>
      {scannedImage && (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: scannedImage }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin :5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#2196F3', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    marginLeft: 10, 
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default Doc;