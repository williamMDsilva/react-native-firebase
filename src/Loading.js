import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import firebase from 'react-native-firebase';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default class Loading extends React.Component {
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                this.props.navigation.push('Login')
            }
            const refUsers = firebase.firestore().collection('usuarios').doc(user.uid);
            refUsers.get()
                .then(doc => {
                    if (doc.exists) {
                        const dataUsuario = doc.data();
                        if(dataUsuario.firstAccess){
                            this.props.navigation.navigate('FirstLogin', {user, dataUsuario})
                        }else{
                            this.props.navigation.navigate('HomeDash', {user, dataUsuario})
                        }
                    }else{
                        this.props.navigation.navigate('FirstLogin')
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                    return 'Erro';
                });        
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} color={Colors.indigo900} size="large"  />
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