import React, {Component} from 'react';
import { Text, View,TextInput,TouchableOpacity,Alert} from 'react-native';
import estilo from './estilo.js'

//Definindo a class paginab
class IMC extends React.Component{
  constructor(props){
      super(props) 
      this.state ={altura:0,massa:0,resultado:0,resultTexto:""
    }
    this.calcular = this.calcular.bind(this)
    } 
    //calcular o indece de massa corporica
    calcular(){
        console.log('this.stateeee: ', this.state);
        this.state.resultado = this.state.peso/(this.state.altura*this.state.altura)

        //dar mensagem de acordo com a questao 
    if(this.state.altura < 1 || this.altura > 3){
    Alert.alert('Erro!', 'Verifique valor da altura.')
    this.state.resultTexto = 'Verifique valor da altura.'
    this.state.resultado = 0
    }
    else if(this.state.resultado < 16){
    this.state.resultTexto = 'Muito abaixo do peso!'
    }
    else if (this.state.resultado < 17){
    this.state.resultTexto = 'Moderadamente abaixo do peso!'
    }
    else if (this.state.resultado < 18.5){
    this.state.resultTexto = 'Abaixo do peso!'
    }
    else if (this.state.resultado < 25) {
    this.state.resultTexto = 'Saudável!'
    }
    else if (this.state.resultado < 30) {
    this.state.resultTexto = 'Sobrepeso!'
    }
    else if (this.state.resultado < 35) {
    this.state.resultTexto = 'Obesidade Grau 1°!'
    }
    else if (this.state.resultado < 40) {
    this.state.resultTexto = 'Obesidade Grau 2°!'
    }
    else if(this.state.resultado > 41){
    this.setState.resultTexto = 'Obesidade Grau 3°'
    }  }    
      
render() {
  return (
    console.log(this.state),
    <View style={estilo.guia}>
    <View style={estilo.TituloConteiner}>
    <Text style={estilo.Titulo}>IMC</Text>
    </View><View style={estilo.conteirnerConteudo}>
      <View style={estilo.horizonta}>
        
<TextInput style = {estilo.entrada}
autoCapitalize="none"
value={this.state.massa}
onSubmitEditing={() => this.passwordInput.focus()}
autoCorrect={false}
keyboardType='number-pad'
returnKeyType="next"
placeholder='Digite seu peso'
placeholderTextAling='center'
onSubmitEditing={() => this.passwordInput.focus()}
placeholderTextColor='rgba(225,225,225,0.7)'
onChangeText={(peso) => this.setState({peso})}/>
</View>

<View style = {estilo.horizonta}>
<TextInput style = {estilo.entrada}
returnKeyType="go"
keyboardType='numeric'
ref={(input)=> this.passwordInput = input}
placeholder='Digite sua altura '
placeholderTextColor='rgba(225,225,225,0.7)'
onChangeText={(altura) => this.setState({altura})}

value={this.state.senha} /></View>
<View style = {estilo.horizontal}  style={{marginVertical:100}}>
 <TouchableOpacity style={estilo.btncont} onPress={this.calcular}>
<Text style={estilo.btncalc}>Calcular</Text>
</TouchableOpacity>
<Text style={estilo.textoBaixo}>{this.state.resultado.toFixed(2)}</Text></View>
<Text style={estilo.textoBaixo2}>{this.state.resultTexto}</Text></View>
 </View>
    
  );
}

}

export default IMC
