import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
const { height, width } = Dimensions.get('window');
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
  state = {name: '', email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    const { email, name, password} =this.state;
    // TODO: Firebase stuff...
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user.updateProfile({
          displayName: name
        })
        this.props.navigation.navigate('Home')}
      )
      .catch(error => this.setState({ errorMessage: error.message }))

  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <View style={styles.inputBox} >
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
            <HelperText
              type="error"
              visible={true}
            >
              Error: Only letters are allowed
            </HelperText>

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
          <TouchableHighlight style={styles.btnSingUp} onPress={this.handleSignUp}>
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
    paddingHorizontal: 5,
  },
  inputBox: {
    width,
    paddingHorizontal: 5,
  },
})