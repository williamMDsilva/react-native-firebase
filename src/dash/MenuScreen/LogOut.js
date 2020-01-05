import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import firebase from 'react-native-firebase';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default class Loading extends React.Component {
    static navigationOptions = {
        title: 'Dash',
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        firebase.auth().signOut().then(function () {
            this.props.navigation.navigate('Loading')
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} color={Colors.indigo900} size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})