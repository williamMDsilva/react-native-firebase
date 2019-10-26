import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight,processColor } from 'react-native';

import {Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

import {RadarChart} from 'react-native-charts-wrapper';
import update from 'immutability-helper';

export default class RadarScreen extends React.Component {
    static navigationOptions = {
        title: 'Bem-Vindo',
    };
    constructor(props) {
        super(props);

        this.state = {
          data: {},
          legend: {
            enabled: false,
            textSize: 10,
            form: 'CIRCLE',
            wordWrapEnabled: false
          },
          dataSetsValue: this.props.navigation.getParam('dataSetRadarChart', []),
        };
      }
      componentDidMount() {

        this.setState(
          update(this.state, {
            data: {
              $set: {
                dataSets: [{
                  values: this.state.dataSetsValue,
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
                valueFormatter: ['HABILIDADE A', 'HABILIDADE B', 'HABILIDADE C', 'HABILIDADE D', 'HABILIDADE E', 'HABILIDADE F', 'HABILIDADE G']
              }
            }
          })
        );
      }
    
      handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
          this.setState({...this.state, selectedEntry: null})
        } else {
          this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    
        console.log(event.nativeEvent)
      }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={styles.container}>
                    <RadarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={{drawLabels:true}}
                        chartDescription={{text: ''}}
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

                </View>   
                {/* <TouchableHighlight
            style={{flex:1, height, width, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigate('', {name: 'Jane'})}
            >
                <Text style={{flex:1, }}>Gerar dados</Text>
            </TouchableHighlight> */}


            <TouchableHighlight style={styles.proximoSkill} onPress={() => navigate('StartCalendar', { name: 'Jane', 'setHabilidades': this.state.dataSetsValue })}>
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
    container: {
      flex: 1,
    },
    chart: {
      flex: 1
    },
    textMenu: {
      padding:15,
      color:'#FAFAFA'
    },
    proximoSkill:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#0277BD',
    },
  });