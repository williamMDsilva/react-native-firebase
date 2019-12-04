import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';
import DatePicker from 'react-native-datepicker'

const {height, width} = Dimensions.get('window');

export default class ConfigAlarm extends React.Component {
    static navigationOptions = {
        title: 'Configurar horario',
    };
    constructor(props){
        super(props);
        this.state = {date:"08:00"}
    }
    render() {
        const {navigate} = this.props.navigation;
        return (<View style={{flex: 1, height}}>
            <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 15,  fontWeight: 900}}>
                <Text>
                    Configurar horario de estudo
                </Text>
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
            <TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('Home', {name: 'Jane'})}>
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