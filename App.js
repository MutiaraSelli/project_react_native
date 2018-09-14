/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Bebas from './Components/bebas';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Bebas/>
        <Image style={styles.gambar}
        source={require('./content/gambar/selli.jpg')}
        />
        <Text style={styles.welcome}>Haaallooo!!</Text>
        <Text style={styles.welcome}>Nama     : Mutiara Selli Aprilina</Text>
        <Text style={styles.welcome}>No.Absen : 29</Text>
        <Text style={styles.welcome}>Kelas    : XI RPL 2</Text>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gambar:{
    width: 300,
    height: 300,
  }
});
