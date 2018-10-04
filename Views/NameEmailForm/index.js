import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  LayoutAnimation,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import BusinessForm from '../BusinessForm';
import { Font } from 'expo';
import axios from 'axios';

// Spring
var CustomLayoutSpring = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7
  }
};

export default class NameEmailForm extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      index: 2,
      display: true,
      name: '',
      email: '',
      nameValid: false,
      emailValid: false
    };
  }

  getInitialState() {
    return {
      styleNameInput: styles.inputText,
      styleEmailInput: styles.inputText
    };
  }

  validate = (value, type) => {
    let name = value;
    let email = value;
    let password = value;
    let nameValid = false;
    let passwordValid = false;
    let emailRegex = false;

    switch (type) {
      case 'name':
        nameValid = name.length > 0;
        if (nameValid) {
          this.setState({
            styleNameInput: styles.inputTextFocus,
            nameValid: true,
            name: name
          });
        } else {
          this.setState({
            styleNameInput: styles.inputTextError,
            nameValid: false
          });
        }
        break;
      case 'email':
        emailRegex = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailRegex) {
          axios
            .get(`https://my.tanda.co/try/validate_email?email=` + email)
            .then(res => {
              if (res.data) {
                this.setState({
                  styleEmailInput: styles.inputText,
                  emailValid: true,
                  email: email
                });
              } else {
                this.setState({
                  styleEmailInput: styles.inputTextError,
                  emailValid: false
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.setState({
            styleEmailInput: styles.inputTextError,
            emailValid: false
          });
        }
        break;
      default:
        break;
    }
  };

  onFocus(e) {
    switch (e) {
      case 'name':
        this.setState({ styleNameInput: styles.inputTextFocus });
        break;
      case 'email':
        this.setState({ styleEmailInput: styles.inputTextFocus });
        break;
      default:
        break;
    }
  }

  onEndEditing(e) {
    switch (e) {
      case 'name':
        if (this.state.nameValid) {
          this.setState({ styleNameInput: styles.inputText });
        }
        break;
      case 'email':
        if (this.state.emailValid) {
          this.setState({ styleEmailInput: styles.inputText });
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.title}>Let's get you set up!</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <View style={styles.rowQuestion}>
              <Text style={styles.formQuestion}>Tell us about you</Text>
            </View>
            <View style={styles.rowInput}>
              <TextInput
                placeholder="My name"
                underlineColorAndroid="transparent"
                onEndEditing={() => this.onEndEditing('name')}
                onChangeText={e => this.validate(e, 'name')}
                style={[styles.inputText, this.state.styleNameInput]}
                autoCapitalize="words"
                onFocus={() => this.onFocus('name')}
                value={this.state.name}
              />
              <TextInput
                style={styles.inputText}
                placeholder="My email"
                underlineColorAndroid="transparent"
                onEndEditing={() => this.onEndEditing('email')}
                onChangeText={e => this.validate(e, 'email')}
                style={[styles.inputText, this.state.styleEmailInput]}
                onFocus={() => this.onFocus('email')}
                autoCapitalize="none"
                defaultValue={this.state.email}
              />
            </View>
            <View style={styles.rowButton}>
              <Button
                title="Next"
                fontSize={22}
                buttonStyle={styles.buttonBlue}
                color="#ffffff"
                disabled={
                  this.state.nameValid == false ||
                  this.state.emailValid == false
                }
                onPress={() => {
                  this.props.navigation.navigate('StaffForm', {
                    email: this.state.email,
                    name: this.state.name
                  });
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    backgroundColor: '#3fafd7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#3fafd7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'lato-bold',
    fontWeight: '600'
  },
  formQuestion: {
    fontSize: 27,
    color: '#536171',
    fontWeight: '600',
    alignItems: 'center',
    fontFamily: 'lato'
  },
  buttonBlue: {
    backgroundColor: '#3fafd7',
    width: '100%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 6,
    marginBottom: 6
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#DAE0E8',
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 8,
    fontSize: 20,
    marginTop: 12,
    marginBottom: 12
  },
  rowQuestion: {
    flex: 0.5
  },
  rowInput: {
    flex: 4,
    alignSelf: 'stretch'
  },
  rowButton: {
    flex: 1
  },
  inputTextFocus: {
    borderWidth: 1,
    borderColor: '#3FAFD7'
  },
  inputTextError: {
    borderWidth: 1,
    borderColor: '#D63C3A'
  }
});
