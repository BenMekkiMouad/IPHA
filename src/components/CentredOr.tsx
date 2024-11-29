import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenteredOr = () => {
  return (
    <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.line}></View>
      </View>
  );
};

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
      },
      orText: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 10,
      },
});

export default CenteredOr;
