import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, TouchableHighlight, Image } from 'react-native';

const {height, width} = Dimensions.get('window');

import firebase from 'react-native-firebase'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Bem-Vindo',
    };
    constructor(props){
        super(props);
        this.state = {
            currentUser: '123456',
            firstAcess: true
        }
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'Home' : 'Login')
        // })

        // const { currentUser } = firebase.auth()
        // this.setState({ currentUser })
        if(this.state.firstAcess){
            //this.props.navigation.navigate(user ? 'Home' : 'Login')
        }else{
            this.props.navigation.navigate('HomeDash')
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (<TouchableHighlight
            style={{flex: 1}}
                onPress={() => navigate('Start', {name: 'Jane', currentUser: this.state.currentUser})}
            >
                <ImageBackground 
                    style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent:'center', paddingVertical: 50 }}
                    source={require('./img/logo.jpeg')}>
                    <Text>Toque na tela para iniciar</Text>
                </ImageBackground>
            </TouchableHighlight>);

            
    }
}