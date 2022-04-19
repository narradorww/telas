import React, {useState,useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlobalContext from '../context/globalContext';
import Header from '../components/Header';
import Tela from '../components/Tela';
import colors from '../common/colors';
import {color} from 'react-native-reanimated';

const Tela3 = ({navigation}) => {
  const [items, setItems] = useState([
    {tela: 1, code: colors.tela1},
    {tela: 2, code: colors.tela2},
    {tela: 5, code: colors.tela5},
    {tela: 4, code: colors.tela4},
  ]);

  return (
    <>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Header fundo={colors.tela3} />
      </SafeAreaView>

      <FlatGrid
        itemDimension={120}
        data={items}
        style={styles.gridView}
        spacing={30}
        renderItem={({item}) => (
          <>
            <View style={styles.header}>
              <Text>Tela</Text>
            </View>
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Tela number={item.tela} />
              <Button
                title={` Vote em Tela${item.tela}`}
                onPress={() => {
                  navigation.navigate(`Tela${item.tela}`);
                  console.log(`Clicou na Tela${item.tela}  vezes`);
                  
                }}
              />
            </View>
          </>
        )}
      />
      <View style={styles.footer}>
        <Text>Tela</Text>
      </View>
    </>
  );
};

export default Tela3;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
  },

  gridView: {
    flex: 1,
    backgroundColor: '#0F1B44',
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
