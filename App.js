import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Ensure this is only imported once
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HelloScreen');
    }, 10000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Trường ĐH Sư Phạm Kỹ Thuật HCM</Text>
      <Text>Khoa Công nghệ Thông tin</Text>
      <Text>Đinh Trung Nguyên</Text>
      <Text>MSSV: 21110259</Text>
    </View>
  );
}

function HelloScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello word</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HelloScreen" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

