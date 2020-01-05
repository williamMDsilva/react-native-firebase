import React from 'react';
import { StyleSheet, View, TouchableHighlight, processColor } from 'react-native';

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

import { RadarChart } from 'react-native-charts-wrapper';
import update from 'immutability-helper';

import { Modal, Portal, Text, Provider, Avatar, Button, Card, Title, Paragraph, IconButton, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'

export default class RadarSkills extends React.Component {
	static navigationOptions = {
		title: 'Bem-Vindo',
	};
	constructor(props) {
		super(props);
		const user = this.props.navigation.getParam('user', null);
		const dataUsuario = this.props.navigation.getParam('dataUsuario', null);
		if (user == null || dataUsuario == null) {
			this.props.navigation.navigate('Login');
		}

		this.state = {
			user,
			data: {},
			newValueHabilitie: "10",
			legend: {
				enabled: false,
				textSize: 10,
				form: 'CIRCLE',
				wordWrapEnabled: false
			},
			dataUsuario,
			visible: false,
			skillsValue: [],
			valueFormatter: ['Vibrato', 'Troca de posição', 'Stacato', 'Legato', 'Detaché', 'Qualidade do som', 'Afinação', 'Agilidade']
		};

	}

	updateStateWhenSaveDataChart = (skills) => {
		const {dataUsuario} = this.state;
		dataUsuario.skills = skills;
		this.setState(
			update(this.state, {
				data: {
					$set: {
						dataSets: [{
							values: dataUsuario.skills,
							label: 'Habilidades',
							config: {
								color: processColor('#212121'),
								drawFilled: false,
								fillColor: processColor('#212121'),
								fillAlpha: 100,
								lineWidth: 3
							}
						}],
					}
				},
				xAxis: {
					$set: {
						valueFormatter: ['Vibrato', 'Troca de posição', 'Stacato', 'Legato', 'Detaché', 'Qualidade do som', 'Afinação', 'Agilidade']
					}
				}
			}), 
				this.setState({dataUsuario})
			)

	}

	componentDidMount() {
		const { dataUsuario, valueFormatter } = this.state;

		this.setState(
			update(this.state, {
				data: {
					$set: {
						dataSets: [{
							values: dataUsuario.skills,
							label: 'Habilidades',
							config: {
								color: processColor('#212121'),
								drawFilled: false,
								fillColor: processColor('#212121'),
								fillAlpha: 100,
								lineWidth: 3
							}
						}],
					}
				},
				xAxis: {
					$set: {
						valueFormatter
					}
				}
			})
		);

	}

	// componentDidUpdate(nextProps, nextState){
	// 	const user = nextProps.navigation.getParam('user', null);
	// 	const dataUsuario = nextProps.navigation.getParam('dataUsuario', null);
	// 	this.setState({
	// 		...nextState,
	// 		user,
	// 		dataUsuario
	// 	});
	// }

	handleSelect(event) {

	}

	saveValueOnOk = async () => {
		const { dataUsuario, skillValue, user } = this.state;
		if (selectedEntry != null) {
			const { data } = selectedEntry;
			let newData = dataUsuario.skills;

			console.log(newData);
			newData.forEach(element => {
				if (element.chave === data.chave) {
					//TODO
					element.value = skillValue;
				}
			});
			console.log(newData);

			await this.updateSkills(newData, user)

			this.setState({ skillValue: 10, selectedEntry: null }, this._hideModal());
		}
	}

	async updateSkills(data, user) {
		await firestore()
			.collection('usuarios')
			.doc(user.uid)
			.update({
				skills: data,
			});
	}

	renderModalSkill() {
		const { visible, selectedEntry } = this.state;
		if (selectedEntry != null && selectedEntry.data != null) {
			const data = selectedEntry.data;
			return (<Modal visible={visible} onDismiss={this._hideModal} >

			</Modal>)
		}
		return;
	}

	render() {
		const { navigate } = this.props.navigation;
		const { dataUsuario, user } = this.state;

		return (
			<Provider>
				<Portal>
					<View style={{ alignItems: 'flex-end' }}>
						<IconButton icon="pencil" onPress={() => navigate('SkillConfig', { skills: dataUsuario.skills, performUpdate: this.updateStateWhenSaveDataChart })} />
					</View>
					<View style={{ flex: 1 }}>
						<View style={styles.container}>
							<RadarChart
								style={styles.chart}
								data={this.state.data}
								xAxis={this.state.xAxis}
								yAxis={{ drawLabels: true }}
								chartDescription={{ text: '' }}
								legend={this.state.legend}
								drawWeb={true}

								webLineWidth={1}
								webLineWidthInner={1}
								webAlpha={255}
								gridColor={processColor('#000')}


								webColor={processColor('#0288D1')}
								webColorInner={processColor('#81D4FA')}

								skipWebLineCount={5}
								onSelect={this.handleSelect.bind(this)}
								onChange={(event) => console.log(event.nativeEvent)}
							/>
						</View>

						<TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('StartCalendar')}>
							{/* <View style={{flexDirection:'column', alignItems: 'center'}}>
										<Ionicons name="md-calendar" style={{ color: '#212121', fontSize: 35 }} />
										<Text style={styles.textMenu}>Agenda</Text>
								</View> */}
							<Text style={styles.textMenu}>Proximo</Text>
						</TouchableHighlight>
					</View>
					{this.renderModalSkill()}
				</Portal>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	chart: {
		flex: 1
	},
	textMenu: {
		padding: 15,
		color: '#FAFAFA'
	},
	proximoSkill: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0277BD',
	},
});