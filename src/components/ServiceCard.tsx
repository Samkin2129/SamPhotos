import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    <Text style={styles.price}>${price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
});

export default ServiceCard;
