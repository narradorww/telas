import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const VoteButton = ({onPress, tela, navigation}) => {
  const handlePress = () => {
    console.log(`Clicou na ${tela}`);
    navigation.navigate({tela});
    contavoto();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text> Vote em {tela}</Text>
    </TouchableOpacity>
  );
};
export default VoteButton;
