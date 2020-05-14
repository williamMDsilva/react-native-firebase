import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import StartCalendarScreen from '../../first-access/StartCalendarScreen'

export default class HomeRoute extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const props = this.props;
        return (
            <StartCalendarScreen />
        )
    }
}