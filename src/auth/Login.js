import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Button, Avatar, Title, Snackbar } from 'react-native-paper';

const { height, width } = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null}
  handleLogin = () => {
    const { email, password } = this.state
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => this.props.navigation.push('Loading'))
        .catch(error => this.setState({ errorMessage: error.message }))
    } else {
      this.setState({ errorMessage: 'Verifique seu usuario e senha!' })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.inputBox} >

          <TextInput
            mode="outlined"
            label="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email} />

          <TextInput
            mode="outlined"
            secureTextEntry
            label="Senha"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password} />

        </View>

        <View style={styles.btnBox} >

          <Button icon="send" mode="contained" onPress={this.handleLogin}>
              Entrar
          </Button>

          <Title style={styles.ouCadastrar}>Ou</Title>

          <Button icon="plus" mode="outlined" onPress={() => this.props.navigation.navigate('SignUp')}>
              Cadastrar
          </Button>
        </View>
        <Snackbar
          visible={this.state.errorMessage != null}
          onDismiss={() => this.setState({ errorMessage: null })}
          action={{
            label: 'Fechar',
            onPress: () => {
              this.setState({ errorMessage: null })
            },
          }}
        >
          {this.state.errorMessage}
        </Snackbar>
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
    margin: 50,
  },
  textInput: {
    width,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
  },
  textMenu: {
    padding: 15,
    color: '#FAFAFA'
  },
  //style={{flexGrow:1, backgroundColor:'#33691E', alignItems:'center' }}
  btnSingUp: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#0277BD',
    width: '100%',
    marginTop: 5,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    width: '100%',
    marginTop: 5,
  },
  btnBox: {
    width,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputBox: {
    width,
    paddingHorizontal: 5,
  },
  ouCadastrar: {
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  }
})