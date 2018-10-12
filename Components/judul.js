import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';
import Bebas from './Bebas';

export default class judul extends Component{
  redirect()
  {
      Alert.alert = ("This Button is ready")
      
  }

  render(){
    return(
      <View style = {styles.container}>
      <Bebas/>
      <Image source ={require('./iot.jpg')} style={{width: 200, height: 200}}/> 
      <Text style = {warna.mutsell}> Hallo! </Text>
      <Text style = {salon.selli} > Nama : Mutiara Selli Aprilina</Text>
      <Text style = {salon.selli} > Kelas : XI RPL 2 </Text>
      <Text style = {salon.selli} > SMK Telkom Purwokerto</Text>
         <Text style = {{ marginBottom : 100}}></Text>
         <Button title = " Next " color = "#16a085" onPress = {() => {this.redirect()}}/>
      </View>


   )
  }
}

const styles = StyleSheet.create({
  container : {
  flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#1abc9c',
  }
});
const warna = {
  mutsell : {
    color : "#2c3e50",
    fontSize : 20,
    fontWeight : 'bold',
  }
}

const salon = {
  selli : {
    color : "#2c3e50",
    fontSize : 20,
  }
}