import React from 'react';
import firebase from 'react-native-firebase';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Title as TitleSkill } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

export default class ConfigAlarm extends React.Component {
    static navigationOptions = {
        title: 'Configurar horario',
    };
    constructor(props){
        super(props);
        this.state = {date:"08:00"}
    }
    saveAndFinalize = () => {
        const { date } = this.state;
        const user = this.props.navigation.getParam('user', null);
        if(user != null){
            firebase.firestore()
                .collection('usuarios')
                .doc(user.uid)
                .update({
                    firstAccess: false,
                    horarioEstudo: date,
                }).then((data) => {
                    this.props.navigation.navigate('HomeDash', { user })
                }).catch((err) => {
                    console.log("AlarmConfigure error", err)
                });
        }
    }
    render() {
        return (<View style={{flex: 1, height}}>
            <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 15,  fontWeight: 900}}>
                <TitleSkill style={{textAlign: "center"}}>Configurar horario de estudo</TitleSkill>
            </View>
            <View style={styles.styleDatapick}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="time"
                    format="LT"
                    minDate="00:00"
                    maxDate="11:59"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
            <TouchableHighlight style={styles.proximoSkill} onPress={this.saveAndFinalize}>
                        {/* <View style={{flexDirection:'column', alignItems: 'center'}}>
                    <Ionicons name="md-calendar" style={{ color: '#212121', fontSize: 35 }} />
                    <Text style={styles.textMenu}>Agenda</Text>
                </View> */}
                        <Text style={styles.textMenu}>Finalizar</Text>
                </TouchableHighlight>
        </View>)
    }
}
const styles = StyleSheet.create({
    textMenu: {
        padding:15,
        color:'#FAFAFA'
      },
      //style={{flexGrow:1, backgroundColor:'#33691E', alignItems:'center' }}
      proximoSkill:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#0277BD',
      },
      styleDatapick:{
        flex:1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 5,
      }
})