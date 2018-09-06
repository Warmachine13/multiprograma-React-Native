// pacote do react
import React, {Component} from 'react';

//imporando o que vai usar
import {Platform, Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView,StatusBar,ActivityIndicator} from 'react-native';

//chamando o stack navigator para fazer a navegaçao entre telas
import { createStackNavigator } from 'react-navigation';

//importando o estilo do doc estilo.js
import estilo from './estilo.js'

// definindo a classe Login
class Login extends React.Component {
  //Definindo  variaveis
  constructor(props) {
    super(props)
    this.state = {
        login: "",
        senha: ""
    }}
  // renderizer a tela de login
render() {
  return (
// Controla a o teclado ainda não funciona
<KeyboardAvoidingView style = {estilo.centrao}>


<StatusBar
barStyle="light-content"/>
<View style = {estilo.horizontal} style = {{backgroundColor:'none',marginBottom:70}}>
<Text style = {estilo.LabelInicial}>Login</Text>
</View>
<View style = {estilo.horizontal}>
    <TextInput style = {estilo.input}
                 autoCapitalize="none"
                 value={this.state.login}
                 onSubmitEditing={() => this.passwordInput.focus()}
                 autoCorrect={false}
                 keyboardType='email-address'
                 returnKeyType="next"
                 placeholder='Digite seu login'
                 placeholderTextAling='center'
                 onSubmitEditing={() => this.passwordInput.focus()}
                 placeholderTextColor='rgba(225,225,225,0.7)'
                 onChangeText={(login) => this.setState({login})}/>
                 </View>

           <View style = {estilo.horizontal}>
           <TextInput style = {estilo.input}
                returnKeyType="go"
               ref={(input)=> this.passwordInput = input}
                placeholder='Digite sua senha '
                placeholderTextColor='rgba(225,225,225,0.7)'
                secureTextEntry={true}
                onChangeText={(value) => this.setState({senha: value})}
                value={this.state.senha} /></View>
                <View style = {estilo.horizontal}  style={{marginVertical:100}}>
                  <TouchableOpacity style={estilo.buttonContainer}
            //    onPress={() => this.props.navigation.navigate('Terceira')}
              onPress={this.clicou}
                >
                <Text style={estilo.buttonText}>LOGIN</Text>

               </TouchableOpacity></View></KeyboardAvoidingView>  );}
//funcao do botao
clicou = () => {
  console.log('this.stateeee: ', this.state);
  if(this.state.login.length < 1 || this.state.senha.length < 1) {
    alert("Voce não digitou em um dos campos")
}else if((this.state.login) === ("Admin") && (this.state.senha) === ("1234")) {
  this.props.navigation.navigate('HomeScreen')}
  else{
    alert("Voce digitou dados incorretos ")
  }
}}
//exportando para Login para fora
export default Login
