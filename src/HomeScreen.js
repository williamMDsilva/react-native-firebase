import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

import {Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Bem-Vindo',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (<TouchableHighlight
            style={{flex:1, height, width, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigate('Start', {name: 'Jane'})}
            >
                <Text style={{flex:1, }}>Toque na tela para iniciar</Text>
            </TouchableHighlight>);
    }
}