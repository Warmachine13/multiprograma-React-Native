// pacote do react
import React, {Component} from 'react';

//imporando o que vai usar
import {Platform, StyleSheet, Text, View,Button,TouchableOpacity,ScrollView} from 'react-native';

//chamando o stack navigator para fazer a navegaçao entre telas
import { createStackNavigator } from 'react-navigation';

//importando o estilo do doc estilo.js
import estilo from './estilo.js'

// definindo a renderizaçao da PaginaA
//Pagina principal depois do login 
class PaginaA extends React.Component {
render() {
  return (
    <View style={estilo.guia}>
    <View style={estilo.TituloConteiner}>
    <Text style={estilo.Titulo}>Seja bem vindo</Text>
    </View><View style={estilo.TituloConteiner}>
    <View style={estilo.planodefundo}>
    <View style={estilo.conteirnerConteudo2}>
    <ScrollView>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}>
    <Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity></View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('IMC2')}>
    <Text style={estilo.textBotao}>IMC</Text>
    </TouchableOpacity></View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Imagens')}>
    <Text style={estilo.textBotao}>Imagens da web</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View>
    <View style={estilo.conteirnerBotao}>
    <TouchableOpacity style={estilo.botao} onPress={() => this.props.navigation.navigate('Segunda')}><Text style={estilo.textBotao}>Lista de filmes</Text>
    </TouchableOpacity>
    </View></ScrollView></View>
    </View></View></View>
  );}}
//exportando para fora
export default PaginaA
