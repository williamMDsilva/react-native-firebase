import React from 'react';
import { StyleSheet, FlatList, View, TouchableHighlight, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Title as TitleSkill } from 'react-native-paper';
import list from './Model/ListWeek'
const {height, width} = Dimensions.get('window');

export default class StartCalendarScreen extends React.Component {
    static navigationOptions = {
        title: 'Minha rotina de estudo',
    };
    constructor(props) {
        super(props);
        const user = props.navigation.getParam('user', null);
        const dataUsuario = props.navigation.getParam('dataUsuario', {});
        if(user == null){
           props.navigation.navigate('Login');
        }
        this.state = {
            user,
            dataUsuario,
            listItens: list
        }
    }

    componentDidMount(){

    }

    saveDay = () => {

    }

    keyExtractor = (item, index) => index.toString()

    atualizeDayCount = (keyDataBase, dayData) => {
        const { dataUsuario } = this.state

        dataUsuario[keyDataBase] = dayData;
        
        this.setState({ dataUsuario, listItens: list});
    }

    renderItem = ({ item }) => {
        const {dataUsuario, user} = this.state
        return (<ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={ <Avatar rounded title={item.avatar} /> }
            bottomDivider
            chevron
            badge={{ value: dataUsuario[item.keyDataBase] ? dataUsuario[item.keyDataBase].length : 0, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
            onPress={() => {
                this.props.navigation.navigate('NewDay', {dayData: dataUsuario[item.keyDataBase], dayConfig: item, user, atualizeDayCount: this.atualizeDayCount})
            }}
        />)
    }    

    render() {
        const {navigate} = this.props.navigation;
        const { listItens } = this.state;
        const { user } = this.state
        
        return (
            <View style={{ flex: 1, height }}>
                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 15,  fontWeight: 900}}>                        
                    <TitleSkill style={{textAlign: "center"}}>Minha rotina de estudo</TitleSkill>
                </View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={listItens}
                    renderItem={this.renderItem}
                    />
                     <TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('ConfigAlarm', { user })}>
                        {/* <View style={{flexDirection:'column', alignItems: 'center'}}>
                    <Ionicons name="md-calendar" style={{ color: '#212121', fontSize: 35 }} />
                    <Text style={styles.textMenu}>Agenda</Text>
                </View> */}
                        <Text style={styles.textMenu}>Proximo</Text>
                </TouchableHighlight>
            </View>
        );
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
      }
})