import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {
  const randomValue = Math.floor(Math.random() * max) + min

  return <Text style={Estilo.textLg}>O valor aleatório é: {randomValue}</Text>
}
