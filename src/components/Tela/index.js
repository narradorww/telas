import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Tela({number,navigation, screen}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tela {number}</Text>
      </View>
      
    </View>
  );
}

export default Tela;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: 10,
        backgroundColor: '#54ff9f',
    },
    headerText: {
        color: '#0056FF',   
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

