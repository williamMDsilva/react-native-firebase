import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { TextInput, Button, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'

const { height, width } = Dimensions.get('window');
export default class SignUp extends React.Component {
  state = { name: '', email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    const { email, name, password } = this.state;

    if(email != '' && name != '' && password != ''){

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user.updateProfile({
            displayName: name
          })
          return result.user
        }).then(async (user) => {
          await firebase.firestore().collection('usuarios').doc(user.uid).set({
            firstAccess: true,
            skills:[10,10,10,10,10,10,10, 10],
            segunda: [],
            terca: [],
            quarta: [],
            quinta: [],
            sexta: [],
            sabado: [],
            domingo: [],
          });
          return user;
        }).then((user) => {
          this.props.navigation.push('Loading')
        })
        .catch(error => this.setState({ errorMessage: error.message }))

      }else{
        this.setState({errorMessage: 'Confira os dados digitados'})
      }
      
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            mode="outlined"
            label='Nome'
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            leftIcon={
              <Icon
                name='envelope'
                size={24}
                color='black'
              />
            } />

          <TextInput
            mode="outlined"
            label='Email'
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            leftIcon={
              <Icon
                name='envelope'
                size={24}
                color='black'
              />
            } />

          <TextInput
            mode="outlined"
            secureTextEntry
            label="Senha"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            leftIcon={
              <Icon
                name='key'
                size={24}
                color='black'
              />
            } />
        </View>
        <View style={styles.btnBox} >
          <Button icon="plus" mode="contained" onPress={this.handleSignUp}>
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
          }}>
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
    backgroundColor: '#0277BD',
    width: '100%',
    marginTop: 5,
  },
  btnBox: {
    width,
    margin: 5,
    paddingHorizontal: 5,
  },
  inputBox: {
    width,
    paddingHorizontal: 5,
  },
})