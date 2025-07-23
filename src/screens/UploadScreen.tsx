import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

export default function UploadScreen() {
  const [photo, setPhoto] = useState<Asset | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setPhoto(response.assets[0]);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 300, marginTop: 20 },
});
