import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, FlatList,ActivityIndicator} from 'react-native';
import estilo from './estilo.js'

//Definindo a class paginab
class PaginaB extends React.Component{
  constructor(props){
      super(props)
      this.state ={isLoading: true}
    } 

    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){

          });

        })
        .catch((error) =>{
          console.error(error);
        });
    }

render() {

  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }
  return (

    <View style={estilo.guia}>
    <View style={estilo.TituloConteiner}>
    <Text style={estilo.Titulo}>Seja bem vindo</Text>
    </View><View style={estilo.conteirnerConteudo}>
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}/>
      </View>
    <Text style={estilo.textoIterno}>Testando cointeiner conteudo </Text></View></View>

  );
}
}

export default PaginaB
