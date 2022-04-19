import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({fundo}) => {
    return(
        <View style={[styles.header, {backgroundColor: {fundo}}]}>
        <View style={styles.rank}>
          <Text>Tela</Text>
          <Text>Rank:#</Text>
        </View>
        <View style={styles.rank}>
          <Text>Quantidade</Text>
          <Text>$$$</Text>
        </View>
      </View>

    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        height: 120,
        padding: 30,

      },
      rank: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
})
