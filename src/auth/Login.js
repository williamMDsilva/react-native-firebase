import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,  } from 'react-native-elements';
const {height, width} = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    if(email && password){
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => this.setState({ errorMessage: error.message }))
    } else {
      this.setState({ errorMessage: 'Verifique seu usuario e senha!' })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
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
                }/> 

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
                }/>
        </View>                
        <View style={styles.btnBox} >
             <TouchableHighlight style={styles.btnLogin} onPress={this.handleLogin}>
                <Text style={styles.textMenu}>Entrar</Text>
            </TouchableHighlight>

            <Text style={styles.ouCadastrar}>Ou</Text>

            <TouchableHighlight style={styles.btnSingUp} onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.textMenu}>Cadastrar</Text>
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
  btnLogin:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#4CAF50',
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
  ouCadastrar:{
    paddingTop: 15,
    textAlign: 'center',
  }
})