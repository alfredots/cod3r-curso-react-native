import React, {useState} from 'react'
import {Text, Button, StyleSheet, View} from 'react-native'
import Estilo from './estilo'

export default ({initialValue, step = 1}) => {
  const [number, setNumber] = useState(initialValue)
  const inc = () => setNumber(number + step)
  const dec = () => setNumber(number - step)

  return (
    <>
      <Text style={style.textTitle}>Contador</Text>
      <Text style={style.textTitle}>{number}</Text>
      <View style={style.buttonContainer}>
        <Button title="incrementar" onPress={inc} />
        <Button title="decrementar" onPress={dec} />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    marginBottom: 16,
  },
  textCounter: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
