import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
//import {AsyncStorage} from 'react-native'

export const gravarDados = async (value) => { 
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('usuarios', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

export const lerDados = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('usuarios')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      return undefined
    }
}
