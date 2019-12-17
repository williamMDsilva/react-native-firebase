import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import {  ListItem, Icon } from 'react-native-elements';
import { Alert, Dimensions } from 'react-native';

import { Button, TextInput } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

export default class NewDayScreen extends React.Component {
    static navigationOptions = {
        title: 'Atividades do dia',
    };
    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false,
            titulo: '',
            subtitulo: '',
            taskDay: [
                {
                    name: 'Escala de D',
                    subtitle: 'Aquecimento',
                    checked: false
                },
                {
                    name: 'Escala de G',
                    subtitle: 'Aquecimento',
                    checked: false
                },
                {
                    name: 'Etude 1',
                    subtitle: 'Exercicio',
                    checked: false
                },
            ]
        }
    }
    componentDidMount(){
       
    }
    handleSave = () => {
        let { taskDay, titulo, subtitulo } = this.state;
        if(titulo != '' && subtitulo != ''){
            console.log("A", taskDay);
            taskDay.push( {name: titulo, subtitle: subtitulo, checked: false})
            this.setState({ taskDay, titulo: '', subtitulo: '' })
        }
    };
    render(){
        const { titulo, subtitulo } = this.state;
        return (<View>
            <View style={{margin: 3}}>
                <TextInput
                    label='Titulo'
                    value={titulo}
                    onChangeText={text => this.setState({ titulo:text })}
                    style={{marginVertical: 3}}
                />
                <TextInput
                    label='Categoria'
                    value={subtitulo}
                    onChangeText={text => this.setState({ subtitulo:text })}
                    style={{marginVertical: 3}}
                />
                
                <Button icon="plus" mode="contained" onPress={this.handleSave} style={{marginVertical: 3, backgroundColor: '#33691E', color:'#FAFAFA'}}>
                    Adicionar Nova tarefa
                </Button>
            </View>
            <ScrollView style={{height}}>
            {
                this.state.taskDay.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                    // leftElement={
                    //     <CheckBox
                    //     onPress={()=>{
                    //         let {taskDay} = this.state;
                    //         taskDay[i].checked = !this.state.taskDay[i].checked;
                    //         this.setState({ taskDay })
                    //     }}
                    //     checked={l.checked}
                    //     />
                    // }
                    rightElement={
                        <Icon
                            name='trash'
                            type='font-awesome'
                            color='#d50000'
                            onPress={() => {
                                let {taskDay} = this.state;
                                delete taskDay[i];
                                this.setState({taskDay})
                            }} />
                    }
                    onPress={()=>{
                       
                    }}                    
                />
                ))
            }
            <View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableHighlight
                        style={{flexGrow:1, backgroundColor:'#0277BD', alignItems:'center' }}
                        onPress={() => this.props.navigation.navigate('StartCalendar', {name: 'Jane'})}
                    >
                         <Text style={{padding:15, color:'#FAFAFA'}}> Voltar </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{flexGrow:1, backgroundColor:'#33691E', alignItems:'center' }}
                        onPress={() => this.props.navigation.navigate('StartCalendar', {name: 'Jane'})}
                    >
                         <Text style={{padding:15, color:'#FAFAFA'}}> Salvar </Text>
                    </TouchableHighlight>

                </View>
            </View>
            </ScrollView>
        </View>)
    }
}