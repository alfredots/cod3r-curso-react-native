import React from 'react'
import {Button} from 'react-native'
import Estilo from './estilo'

export default () => {
  function executar() {
    console.warn('que executudah!')
  }
  return <Button title="Executar!" onPress={executar} />
}
