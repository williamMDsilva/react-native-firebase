import React from 'react';
import { View, Dimensions } from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';
import {  ListItem, Slider,  } from 'react-native-elements';
import { Badge } from 'react-native-paper';
const {height, width} = Dimensions.get('window');

export default class CardSkill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
    onValueChange(value){
        this.setState({value})
    }
    render(){
        const {title, onValueChange, value} = this.props
        return(<Card style={{flex: 1, margin: 10, }}>
            <Card.Content>
                <Title>{title}</Title>
                <View>
                    <Slider
                        value={value}
                        onValueChange={(value) => onValueChange(value)}
                        thumbTintColor={'#1A237E'}
                        minimumTrackTintColor={'#1A237E'}
                        maximumTrackTintColor={'#E8EAF6'}
                        maximumValue={100}
                        style={{ flexGrow: 3 }}
                        />           
                    <Badge>{Math.round(value)}</Badge>
                </View>
            </Card.Content>
          </Card>);
    }
}
{/* <Slider
            value={value}
            onValueChange={onValueChange}
            thumbTintColor={'#1A237E'}
            minimumTrackTintColor={'#1A237E'}
            maximumTrackTintColor={'#E8EAF6'}
            style={{ flexGrow: 3 }}/> */}
{/* <Badge value={Math.round(value * 100)} status="primary" containerStyle={{ flexGrow: 1 }} /> */}