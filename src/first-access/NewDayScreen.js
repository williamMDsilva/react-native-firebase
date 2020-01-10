import React from 'react';
import firebase from 'react-native-firebase';
import { If, View, ScrollView, TouchableHighlight } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { Alert, Dimensions } from 'react-native';
import { Modal, Portal, Text, Provider, Avatar, Button, Card, Title, Paragraph, IconButton, TextInput } from 'react-native-paper';

const { height, width } = Dimensions.get('window');
export default class NewDayScreen extends React.Component {
    static navigationOptions = {
        title: 'Atividades do dia',
    };
    constructor(props) {
        super(props);
        const user = props.navigation.getParam('user', null);
        const dataDay = props.navigation.getParam('dayData', null);
		const dayConfig = props.navigation.getParam('dayConfig', null);
		
        this.state = {
            dataDay
        }
        this.state = {
			user,
			dayConfig,
            dialogVisible: false,
            titulo: '',
            subtitulo: '',
            taskDay: dataDay,
            visible: false,
        }
    }
    componentDidMount() {

    }
    handleSave = () => {
        let { taskDay, titulo, subtitulo } = this.state;
        if (titulo != '' && subtitulo != '') {
            taskDay.push({ titulo, subtitulo, checked: false })
            this.setState({ taskDay, titulo: '', subtitulo: '' }, this._hideModal)
        }
    };
    _showModal = () => this.setState({ visible: true });
	_hideModal = () => this.setState({ visible: false });
	
	saveAndNext = () => {
		const { taskDay, dayConfig, user } = this.state

		this.updateDayTask(taskDay, dayConfig.keyDataBase, user).then((data) =>{
			console.log("Day save", data);
			this.props.navigation.goBack();
			this.props.navigation.state.params.atualizeDayCount(dayConfig.keyDataBase, taskDay);
		}).catch((err) => {
			console.log("Error Day save", err);
		});

	}

	updateDayTask = (taskList, day, user) => {

		const dataSave = {
			[day]:taskList,
		}

		console.log("updateDayTask", dataSave);

		return firebase.firestore()
			.collection('usuarios')
			.doc(user.uid)
			.update({
				[day]:taskList,
			});
			
	}

    render() {
        const { titulo, subtitulo, visible } = this.state;
        return (<View>
            <View style={{ alignItems: 'center' }}>
                <Title >Adicionar Nova Exercício</Title>
                <IconButton icon="plus" onPress={this._showModal} />
            </View>
            <ScrollView style={{ height }}>
                {
                    this.state.taskDay.map((item, index) => {
                        if (item != null) {
                            return <ListItem
                                key={index}
                                title={item.titulo}
                                subtitle={item.subtitulo}
                                bottomDivider
                                rightElement={
                                    <Icon
                                        name='trash'
                                        type='font-awesome'
                                        color='#d50000'
                                        onPress={() => {
                                            let { taskDay } = this.state;
                                            delete taskDay[index];
                                            this.setState({ taskDay })
                                        }} />
                                }
                                onPress={() => {

                                }} />
                        }
                    })
                }
                <View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableHighlight
                            style={{ flexGrow: 1, backgroundColor: '#0277BD', alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate('StartCalendar', { name: 'Jane' })}
                        >
                            <Text style={{ padding: 15, color: '#FAFAFA' }}> Voltar </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ flexGrow: 1, backgroundColor: '#33691E', alignItems: 'center' }}
                            onPress={this.saveAndNext}
                        >
                            <Text style={{ padding: 15, color: '#FAFAFA' }}> Salvar </Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </ScrollView>
            <Modal visible={visible} onDismiss={this._hideModal}>
                <View style={{ padding: 15, backgroundColor: "#FAFAFA" }}>
                    <View style={{ alignItems: 'center' }}>
                        <Title>Adicionar Uma Nova tarefa</Title>
                    </View>
                    <TextInput
                        mode="outlined"
                        autoCapitalize="words"
                        label='Titulo'
                        value={titulo}
                        onChangeText={text => this.setState({ titulo: text })}
                        style={{ marginVertical: 3 }}
                    />
                    <TextInput
                        mode="outlined"
                        autoCapitalize="words"
                        label='Categoria'
                        value={subtitulo}
                        onChangeText={text => this.setState({ subtitulo: text })}
                        style={{ marginVertical: 3 }}
                    />

                    <Button icon="plus" mode="contained" onPress={this.handleSave} style={{ marginVertical: 5, backgroundColor: '#33691E', color: '#FAFAFA' }}>
                        Adicionar
                    </Button>
                </View>
            </Modal>
        </View>)
    }
}