import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Tela1 from './src/pages/Tela1';
import Tela2 from './src/pages/Tela2';
import Tela3 from './src/pages/Tela3';
import Tela4 from './src/pages/Tela4';
import Tela5 from './src/pages/Tela5';
import ColorProvider from './src/context/colorContext';

const Stack = createNativeStackNavigator();


const App = () => {
  

  return (
    <ColorProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela1'>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
      </Stack.Navigator>
    </NavigationContainer>
    </ColorProvider>
    
 
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
  },

  gridView: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
