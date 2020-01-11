import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, TouchableHighlight, Image } from 'react-native';

const {height, width} = Dimensions.get('window');

export default class FirstAcessScreen extends React.Component {
    static navigationOptions = {
        title: 'Bem-Vindo',
    };
    constructor(props){
        super(props);
        this.state = {
            user: {},
            dataUsuario: {},
        }
    }
    componentDidMount() {
        const user = this.props.navigation.getParam('user', null);
        const dataUsuario = this.props.navigation.getParam('dataUsuario', {});
        if(user == null){
            this.props.navigation.navigate('Login');
        }
        this.setState({user, dataUsuario});
    }

    render() {
        const {navigate} = this.props.navigation;
        const {user, dataUsuario} = this.state;
        return (<TouchableHighlight
            style={{flex: 1}}
                onPress={() => navigate('RadarSkills', {user, dataUsuario})}
            >
                <ImageBackground 
                    style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent:'center', paddingVertical: 50 }}
                    source={require('../img/logo.jpeg')}>
                    <Text>Toque na tela para iniciar</Text>
                </ImageBackground>
            </TouchableHighlight>);
    }
}