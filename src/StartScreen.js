import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableHighlight } from 'react-native';
import {  ListItem, Slider, Badge } from 'react-native-elements';
import { StatusBar } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import {Dimensions } from "react-native";

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
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 100, justifyContent: 'center', paddingHorizontal: 15 }}>
                    <Text> Selecione seu nivel de Habilidade de cada item: </Text>
                </View>
                <ScrollView tyle={{ height: height }}>
                    <View style={styles.containerSkill}>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 1</Text>
                            <Slider
                                value={this.state.skillA}
                                onValueChange={skillA => this.setState({ skillA })}
                                style={{ flexGrow: 3 }}
                            />
                            <Badge value={Math.round(this.state.skillA * 10)} status="primary" containerStyle={{ flexGrow: 1 }} />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 2</Text>
                            <Slider
                                value={this.state.skillB}
                                onValueChange={skillB => this.setState({ skillB })}
                            />
                            <Badge value={Math.round(this.state.skillB * 10)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 3</Text>
                            <Slider
                                value={this.state.skillC}
                                onValueChange={skillC => this.setState({ skillC })}
                            />
                            <Badge value={Math.round(this.state.skillC * 10)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 4</Text>
                            <Slider
                                value={this.state.skillD}
                                onValueChange={skillD => this.setState({ skillD })}
                            />
                            <Badge value={Math.round(this.state.skillD * 10)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 5</Text>
                            <Slider
                                value={this.state.skillE}
                                onValueChange={skillE => this.setState({ skillE })}
                            />
                            <Badge value={Math.round(this.state.skillE * 10)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 6</Text>
                            <Slider
                                value={this.state.skillF}
                                onValueChange={skillF => this.setState({ skillF })}
                            />
                            <Badge value={Math.round(this.state.skillF * 10)} status="primary" />
                        </View>
                        <View style={styles.contentSlider}>
                            <Text>Habilidade 7</Text>
                            <Slider
                                value={this.state.skillG}
                                onValueChange={skillG => this.setState({ skillG })}
                            />
                            <Badge value={Math.round(this.state.skillG * 10)} status="primary" />
                        </View>
                    </View>

                    <TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('StartCalendar', { name: 'Jane' })}>
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