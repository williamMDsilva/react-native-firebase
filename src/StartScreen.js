import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import {  ListItem, Slider, Badge } from 'react-native-elements';
import { StatusBar } from 'react-native';
// import {  } from 'react-native-gesture-handler';
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
            skillA: 0.1,
            skillB: 0.1,
            skillC: 0.1,
            skillD: 0.1,
            skillE: 0.1,
            skillF: 0.1,
            skillG: 0.1,
            skillH: 0.1,
        })
    }

    transformeData(){
        return [
             {value: Math.round(this.state.skillA * 100)},
             {value: Math.round(this.state.skillB * 100)},
             {value: Math.round(this.state.skillC * 100)},
             {value: Math.round(this.state.skillD * 100)},
             {value: Math.round(this.state.skillE * 100)},
             {value: Math.round(this.state.skillF * 100)},
             {value: Math.round(this.state.skillG * 100)},
             {value: Math.round(this.state.skillH * 100)},
        ]
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 15,  fontWeight: 900}}>
                    <Text> Mapa de avaliação: </Text>
                </View>
                <ScrollView style={{ height: height }}>
                    <View style={styles.containerSkill}>
                        <View style={styles.contentSlider}>
                            <Text>Vibrato</Text>
                            <Slider
                                value={this.state.skillA}
                                onValueChange={skillA => this.setState({ skillA })}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                style={{ flexGrow: 3 }}
                            />
                            <Badge value={Math.round(this.state.skillA * 100)} status="primary" containerStyle={{ flexGrow: 1 }} />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Troca de posição</Text>
                            <Slider
                                value={this.state.skillB}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillB => this.setState({ skillB })}
                            />
                            <Badge value={Math.round(this.state.skillB * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Stacato</Text>
                            <Slider
                                value={this.state.skillC}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillC => this.setState({ skillC })}
                            />
                            <Badge value={Math.round(this.state.skillC * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Legato</Text>
                            <Slider
                                value={this.state.skillD}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillD => this.setState({ skillD })}
                            />
                            <Badge value={Math.round(this.state.skillD * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Detaché</Text>
                            <Slider
                                value={this.state.skillE}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillE => this.setState({ skillE })}
                            />
                            <Badge value={Math.round(this.state.skillE * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Qualidade do som</Text>
                            <Slider
                                value={this.state.skillF}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillF => this.setState({ skillF })}
                            />
                            <Badge value={Math.round(this.state.skillF * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Afinação</Text>
                            <Slider
                                value={this.state.skillG}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillG => this.setState({ skillG })}
                            />
                            <Badge value={Math.round(this.state.skillG * 100)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Agilidade</Text>
                            <Slider
                                value={this.state.skillH}
                                thumbTintColor={'#1A237E'}
                                minimumTrackTintColor={'#1A237E'}
                                maximumTrackTintColor={'#E8EAF6'}
                                onValueChange={skillH => this.setState({ skillH })}
                            />
                            <Badge value={Math.round(this.state.skillH * 100)} status="primary" />
                        </View>
                    </View>
                    <TouchableHighlight style={styles.proximoSkill} onPress={() => this.props.navigation.navigate('RadarSkils', { "dataSetRadarChart": this.transformeData() } )}>
                        {/* <View style={{flexDirection:'column', alignItems: 'center'}}>
                    <Ionicons name="md-calendar" style={{ color: '#212121', fontSize: 35 }} />
                    <Text style={styles.textMenu}>Agenda</Text>
                </View> */}
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