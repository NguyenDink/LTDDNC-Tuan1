import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function HomePage() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
});
