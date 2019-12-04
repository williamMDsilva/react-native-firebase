import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
const {height, width} = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        // TODO: Firebase stuff...
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Home'))
          .catch(error => this.setState({ errorMessage: error.message }))
        
    }
    render() {
        return (
        <View style={styles.container}>
            <Text>Cadastrar agora</Text>
            {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
            </Text>}

          <View style={styles.inputBox} >
              <Input
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                leftIcon={
                  <Icon
                    name='envelope'
                    size={24}
                    color='black'
                  />
                }
              />
            <Input
              secureTextEntry
              placeholder="Senha"
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              leftIcon={
                <Icon
                  name='key'
                  size={24}
                  color='black'
                />
              }
            />
          </View>
          <View style={styles.btnBox} >
              <TouchableHighlight style={styles.btnSingUp} onPress={this.handleSignUp}>
                  <Text style={styles.textMenu}>Cadastrar e voltar</Text>
              </TouchableHighlight>
          </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
  },
  textMenu: {
    padding:15,
    color:'#FAFAFA'
  },
  //style={{flexGrow:1, backgroundColor:'#33691E', alignItems:'center' }}
  btnSingUp:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#0277BD',
    width: '100%',
    marginTop: 15,
  },
  btnBox:{
    width,
    paddingHorizontal: 15,
  },
  inputBox:{
    width,
    paddingHorizontal: 5,
  },
})