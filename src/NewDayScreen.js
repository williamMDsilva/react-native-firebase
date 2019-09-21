import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {  ListItem, Slider, Badge } from 'react-native-elements';
import { StatusBar } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import {Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');

export default class NewDayScreen extends React.Component {
    static navigationOptions = {
        title: 'Atividades do dia',
    };
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (<View>
            <Text>Day</Text>
            <Button
                    title="Salvar"
                    onPress={() => this.props.navigation.navigate('StartCalendar', {name: 'Jane'})}
                />
        </View>)
    }
}