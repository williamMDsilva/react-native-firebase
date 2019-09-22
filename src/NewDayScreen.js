import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import {  ListItem, CheckBox } from 'react-native-elements';
import { Alert, Dimensions } from 'react-native';
import Dialog from "react-native-dialog";

import EditNewTaskDia from './EditNewTaskDia'

const {height, width} = Dimensions.get('window');

export default class NewDayScreen extends React.Component {
    static navigationOptions = {
        title: 'Atividades do dia',
    };
    state = {
        dialogVisible: false
    };

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    constructor(props){
        super(props);
        this.state = {
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
    render(){
        return (<View>
            <EditNewTaskDia 
                dialogVisible={this.state.dialogVisible}
                handleCancel={() => {
                   console.log("handleCancel");
                }}     
                handleDelete={() => {
                   console.log("handleDelete");
                }}
            />
            <ScrollView style={{height}}>
            {
                this.state.taskDay.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                    leftElement={
                        <CheckBox
                        onPress={()=>{
                            let {taskDay} = this.state;
                            taskDay[i].checked = !this.state.taskDay[i].checked;
                            this.setState({ taskDay })
                        }}
                        checked={l.checked}
                        />
                    }
                    onPress={()=>{
                       
                    }}
                    onLongPress={()=>Alert.alert(
                        'Escala de G',
                        'Escala de G em 2 posição',
                        [
                          {
                            text: 'Editar',
                            onPress: () => console.log(l),
                            style: 'cancel',
                          },
                          {text: 'Deletar', onPress: () => console.log(l)},
                        ],
                        //{cancelable: true},
                      )}
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
                        onPress={this.showDialog}
                    >
                         <Text style={{padding:15, color:'#FAFAFA'}}> Novo </Text>
                    </TouchableHighlight>

                </View>
            </View>
            </ScrollView>
        </View>)
    }
}