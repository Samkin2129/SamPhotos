// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const options = [
  { title: '📷 Upload Photo', screen: 'Upload' },
  { title: '🖼️ View Gallery', screen: 'Gallery' },
  { title: 'ℹ️ About', screen: 'About' },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SamPhotos</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.screen}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigate(item.screen as keyof RootStackParamList)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.buttonContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
