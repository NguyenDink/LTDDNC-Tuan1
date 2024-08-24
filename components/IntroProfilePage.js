import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function IntroProfilePage({ navigation }) {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Home');
      }, 10000);

      return () => clearTimeout(timer);
    }, [navigation]);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trường ĐH Sư Phạm Kỹ Thuật HCM</Text>
        <Text style={styles.subtitle}>Khoa Công nghệ Thông tin</Text>
        <Text style={styles.name}>Đinh Trung Nguyên</Text>
        <Text style={styles.id}>MSSV: 21110259</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40', 
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#004d40',
    marginBottom: 5,
  },
  id: {
    fontSize: 20,
    color: '#004d40',
  },
});
