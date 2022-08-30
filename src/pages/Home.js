import React from "react";
//importar os componentes que vamos usar 
//View; Stylesheet, text, textinput, button
import{View,StyleSheet,Text,TextInput,TouchableOpacity}from 'react-native';
export default function Home(){
 return(
   <View style={styles.container}>
    <Text style={styles.titulo}>Projeto Soma</Text>
    
    <TextInput placeholder="Digita um valor"
    style={styles.campo}/>
    <TextInput placeholder="Digita um valor"
    style={styles.campo}/>
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Calcular</Text>
    </TouchableOpacity>
   </View>
 );
}; //Fecha a função home
const styles=StyleSheet.create({
  container:{
    backgroundColor: '#00008B',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize: 28,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center'},
    campo:{
      backgroundColor: '#fff',
      fontSize:25,
      marginTop:18,
      borderRadius:20,
      padding:15,
    },
    botao:{
      backgroundColor:'#4493BD',
      padding:15,
      marginTop:20,
      width:200,
      alignItems:"center"
    },
    textoBotao:{
      color:'#fff',
      fontSize:17,
      fontWeight:'bold'
    }
});