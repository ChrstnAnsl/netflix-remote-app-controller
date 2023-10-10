import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RemoteScreen = () => {
  // Implement remote control functionality here

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Skip Intro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Skip Recap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RemoteScreen;
