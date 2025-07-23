import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import UploadScreen from './screens/UploadScreen';
import GalleryScreen from './screens/GaleryScreen';
import AboutScreen from './screens/AboutScreen';

export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  Gallery: undefined;
  About: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
         <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
