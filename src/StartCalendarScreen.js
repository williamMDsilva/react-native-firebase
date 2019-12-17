import React from 'react';
import { StyleSheet, FlatList, View, TouchableHighlight, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import {Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Title as TitleSkill } from 'react-native-paper';

const list = [
    {
        name: 'Segunda-feira',
        avatar_url: <Avatar rounded title="S" />,
        subtitle: 'Pressione para visualizar',
        value: 10
    },
    {
        name: 'Terça-feira',
        avatar_url: <Avatar rounded title="T" />,
        subtitle: 'Pressione para visualizar',
        value: 10
    },
    {
        name: 'Quarta-feira',
        avatar_url: <Avatar rounded title="Q" />,
        subtitle: 'Pressione para visualizar',
        value: 10
    },
    {
        name: 'Quinta-quarta',
        avatar_url: <Avatar rounded title="Q" />,
        subtitle: 'Pressione para visualizar',
        value: 13
    },
    {
        name: 'Sexta-feira',
        avatar_url: <Avatar rounded title="S" />,
        subtitle: 'Pressione para visualizar',
        value: 13
    },
    {
        name: 'Sabado',
        avatar_url: <Avatar rounded title="S" />,
        subtitle: 'Pressione para visualizar',
        value: 20
    },
    {
        name: 'Domingo',
        avatar_url: <Avatar rounded title="D" />,
        subtitle: 'Pressione para visualizar',
        value: 10
    },
]
const {height, width} = Dimensions.get('window');

export default class StartCalendarScreen extends React.Component {
    static navigationOptions = {
        title: 'Minha rotina de estudo',
    };

    ComponentDidMount(){

    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={item.avatar_url}
            bottomDivider
            chevron
            badge={{ value: item.value, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
            onPress={() => {
                this.props.navigation.navigate('NewDay', {name: 'Jane'})
            }}
        />
    )

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, height }}>
                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 15,  fontWeight: 900}}>                        
                    <TitleSkill style={{textAlign: "center"}}>Minha rotina de estudo</TitleSkill>
                </View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                    />
                     <TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('ConfigAlarm', {name: 'Jane'})}>
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