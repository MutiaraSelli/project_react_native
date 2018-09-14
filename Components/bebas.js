import React, {Component} from 'react';
import {Text} from 'react-native';

 export default class Bebas extends Component  {
    render(){
        return (
            <Text style={salon.warna}>
            BIODATA</Text>
        )
    }
}
const salon = {
    warna: {
        color : 'black',
        fonthSize : 50,
        fontweight: 'bold',
        backgroundColor : 'grey'
    }
}
