import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Bem-Vindo',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
        <Button
            title="Iniciar Configuração"
            onPress={() => navigate('Start', {name: 'Jane'})}
        />
        );
    }
}