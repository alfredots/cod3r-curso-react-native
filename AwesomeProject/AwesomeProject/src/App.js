import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Contador from './components/Contador'

export default () => {
  return (
    <View style={style.App}>
      <Contador initialValue={100} step={10} />
    </View>
  )
}

const style = StyleSheet.create({
  App: {
    backgroundColor: 'lightgray',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
