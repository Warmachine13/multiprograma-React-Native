// pacote do react
import React, {Component} from 'react';

//imporando o que vai usar
import {Platform, Text, View,Button,TouchableOpacity} from 'react-native';

//chamando o stack navigator para fazer a navegaçao entre telas
import { createStackNavigator } from 'react-navigation';

//importando o estilo do doc estilo.js
import estilo from './estilo.js'

// definindo a classe A
class PaginaC extends React.Component {
render() {
  return (
    
    <View style={estilo.guia}>
    <View style={estilo.TituloConteiner}>
    <Text style={estilo.Titulo}>Lista de filmes</Text>
    </View><View style={estilo.conteirnerConteudo}>
      <View style={{flex: 1, paddingTop:20}}>
        
      </View>
    <Text style={estilo.textoIterno}>Testando cointeiner conteudo </Text></View></View>

  );
}
}
//exportando para fora
export default PaginaC
