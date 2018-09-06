//importaçoes
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import estilo from './estilo.js'
import PaginaA from './PaginaA.js'
import PaginaB from './PaginaB.js'
import PaginaC from './PaginaC.js'
import Login from './Login.js'
import Imagens from './Imagens.js'
import IMC from './Imc.js'

//define como inicio das Telas
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// Controlador do das Telas
const RootStack = createStackNavigator(
 { TelaLogin: Login,
   HomeScreen: PaginaA,
   Segunda: PaginaB,
   Terceira: PaginaC,
   Imagens: Imagens,
   IMC2: IMC

 },
 { initialRouteName: 'TelaLogin',})
