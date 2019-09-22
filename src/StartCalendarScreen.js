import React from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

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
        value: 0
    },
]
  

export default class StartCalendarScreen extends React.Component {
    static navigationOptions = {
        title: 'Crie sua agenda',
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
            <View style={{ flex: 1 }}> 
            <View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                    />
            </View>

                <Button
                    title="Salvar"
                    onPress={() => navigate('Home', {name: 'Jane'})}
                />
            </View>
        );
    }
}