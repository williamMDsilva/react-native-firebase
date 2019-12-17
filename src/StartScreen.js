import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import {  ListItem, Slider, Badge } from 'react-native-elements';
import { StatusBar } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import { Title as TitleSkill } from 'react-native-paper';

import CardSkill from './components/CardSkill'

const {height, width} = Dimensions.get('window');

export default class StartScreen extends React.Component {
    static navigationOptions = {
        title: 'Classifique suas habilidades',
        //headerStyle: { marginTop: Constants.statusBarHeight },
    };
    constructor(props){
        super(props);
        this.state = {
            value: 0            
        }
    }
    componentDidMount(){

        this.setState({
            skillA: 10,
            skillB: 10,
            skillC: 10,
            skillD: 10,
            skillE: 10,
            skillF: 10,
            skillG: 10,
            skillH: 10,
        })
    }

    transformeData(){
        let valuesToReturn = [
                {value: Math.round(this.state.skillA)},
                {value: Math.round(this.state.skillB)},
                {value: Math.round(this.state.skillC)},
                {value: Math.round(this.state.skillD)},
                {value: Math.round(this.state.skillE)},
                {value: Math.round(this.state.skillF)},
                {value: Math.round(this.state.skillG)},
                {value: Math.round(this.state.skillH)},
        ];
       console.log(valuesToReturn)
        return valuesToReturn
    }

    render() {
        const {skillA, skillB, skillC, skillD, skillE, skillF, skillG, skillH} = this.state;

        return (
            <View style={{ flex: 1 }}>
                <TitleSkill style={{textAlign: "center"}}>Mapa de avaliação</TitleSkill>
                <ScrollView style={{ height, backgroundColor:'#EEEEEE' }}>

                    <CardSkill title="Vibrato" value={skillA} onValueChange={(skillA) => this.setState({ skillA })}/>
                    <CardSkill title="Troca de posição" value={skillB} onValueChange={(skillB) => this.setState({ skillB })}/>
                    <CardSkill title="Stacato" value={skillC} onValueChange={(skillC) => this.setState({ skillC })}/>
                    <CardSkill title="Legato" value={skillD} onValueChange={(skillD) => this.setState({ skillD })}/>
                    <CardSkill title="Detaché" value={skillE} onValueChange={(skillE) => this.setState({ skillE })}/>
                    <CardSkill title="Qualidade do som" value={skillF} onValueChange={(skillF) => this.setState({ skillF })}/>
                    <CardSkill title="Afinação" value={skillG} onValueChange={(skillG) => this.setState({ skillG })}/>
                    <CardSkill title="Agilidade" value={skillH} onValueChange={(skillH) => this.setState({ skillH })}/>

                    <TouchableHighlight style={styles.proximoSkill} onPress={() => this.props.navigation.navigate('RadarSkils', { "dataSetRadarChart": this.transformeData() } )}>
                        <Text style={styles.textMenu}>Proximo</Text>
                    </TouchableHighlight>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      width,
      height,
      flexDirection: 'row',
      alignItems: 'center'
    },
    itemMenu: {
      width:width/2,
      height:width/2,
      backgroundColor: '#90CAF9',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
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
    containerSkill:{ 
      flexGrow: 1,
      paddingHorizontal: 15,
      justifyContent:'center',
      alignItems:'stretch',
  
    },
    contentSlider:{
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingVertical:10,
    }
  })