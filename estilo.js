import React,{Component} from 'react';
import {StyleSheet,AppRegistry} from 'react-native';
//pacote de estilos
export default StyleSheet.create({
  Titulo:{
    padding: 6,
    textAlign:'center',
    fontSize: 30

  },
  TituloConteiner:{
    width:350,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    margin:10,
    marginBottom:20
  },
  //funcionando
  planodefundo:{
    flex: 1,
    backgroundColor: '#6495ED',
    flexDirection: 'row'
  },
  container:{
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black'
  },
  botao:{
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'red',
    width: 60
  },
  campo:{
    width:60,
    height:20,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'black'
  },
    container: {
     padding: 20
    },
    centrao:{
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontal:{
        width: 300,
        borderRadius:12,
        marginVertical: 2,
        flexDirection: 'column',
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black'
    },
    LabelInicial:{
        color: 'black',
        width:300,
        fontSize:40,
        textAlign: 'center',
        fontWeight: '700'
    },
    input:{
        height: 40,
        fontSize: 30,
        backgroundColor: 'rgba(225,225,225,0.1)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    tituloInterno: {
      textAlign: 'center',
      fontSize: 25,
      paddingVertical: 5
    },
    textoIterno: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 17
    },

    buttonText:{
        color: '#fff',
        width:300,
        textAlign: 'center',
        fontWeight: '700'
    },
    conteirnerConteudo:{
        backgroundColor: '#F0FFFF',
        width: 355,
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 0,
        textAlign: 'center',
        height: 510,
        borderWidth: 0.5,
        borderRadius: 20
    },
    conteirnerConteudo2:{
        backgroundColor: '#F0FFFF',
        width: 355,
        alignSelf: 'center',
        marginTop: 430,
        marginBottom: 0,
        textAlign: 'center',
        height: 510,
        borderWidth: 0.5,
        borderRadius: 20
    },
    lista:{
      paddingLeft:30,
      fontSize: 30 
    },
    botao:{
      width:330,
      backgroundColor:'blue',
      borderColor:'white',
      borderWidth: 0.6,
      borderRadius:25,
      padding: 20,
      margin: 10,
      marginLeft: 12,
      marginBottom: 0
    },
     //Problema
    textBotao:{
      color: 'red',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 25
  },
  entrada:{
    color: 'red',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 40
},
btncalc:{
    textAlign: 'center',
    fontSize: 40
},
btncont:{
width: 320,
height: 80,
margin: 20,
marginTop: -80,
paddingVertical: 13,
backgroundColor: 'red'
},
  horizonta:{
    width: 350,
    height:50,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 2
  },
  textoBaixo:{
    textAlign: 'center',
    fontSize: 70
  },
  textoBaixo2:{
    textAlign: 'center',
    fontSize: 25
  },
  imagem:{
    width: 346,
    height: 180,
    borderRadius: 47.6, // para arredondar 100%, use metade do width e height aqui
    alignSelf: 'center',
    borderWidth: 0.2,
    margin: 15
    },
  guia:{
    backgroundColor: '#778899',
  //  borderWidth: 2,
  //  borderColor: 'pink',
    flex:1
  //  flexDirection: 'column'
  },})
