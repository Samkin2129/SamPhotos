import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { services } from '../data/Services';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photography Services</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard
            title={item.title}
            description={item.description}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
});

export default HomeScreen;
