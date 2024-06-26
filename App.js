import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';
import Mensajeria from './mensajeria/Mensajeria';
import GeolocationView from './Localizacion/GeolocationView';
import Almacenamiento from './Almacenamiento/Almacenamiento';
import Camara from './Camara/Camara';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main Screen' }} />
        <Stack.Screen name="Mensajeria" component={Mensajeria} options={{ title: 'Contact Form' }} />
        <Stack.Screen name="GeolocationView" component={GeolocationView} options={{ title: 'Geolocation View' }} />
        <Stack.Screen name="Almacenamiento" component={Almacenamiento} options={{ title: 'Geolocation View' }} />
        <Stack.Screen name="Camara" component={Camara} options={{ title: 'Geolocation View' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
