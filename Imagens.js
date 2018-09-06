import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, FlatList,ActivityIndicator,AppRegistry,Image } from 'react-native';
import estilo from './estilo.js'

//Definindo a class paginab

class Imagens extends React.Component{

render() {
    //renderiza as imagens
  let pic = {
      //pega o diretorio da wikimedia 
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  let pic2 = {
    //pega o diretorio da wikimedia fogo no museu 
  uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Fire_at_Museu_Nacional_05.jpg'
};
  return (
    <View style={estilo.guia}>
    <View style={estilo.TituloConteiner}>
    <Text style={estilo.Titulo}>Imagens</Text>
    </View><View style={estilo.conteirnerConteudo}>
    <View style={estilo.contImagen}> 
    <Text>Bananas</Text>
    <Image source={pic} style={estilo.imagem}/>
    </View>
    <View style={estilo.contImagen}> 
    <Text>Fogo no museu</Text>
    <Image source={pic2} style={estilo.imagem}/>
    </View>
    <Text style={estilo.textoIterno}>Testando cointeiner conteudo </Text></View></View>

  );
}
} 


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);

//exporta classe como imagens
export default Imagens
