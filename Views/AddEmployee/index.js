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
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class AddEmployee extends React.Component {
  static navigationOptions = {
    title: 'New Employee',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#3fafd7'
    },
    headerTitleStyle: {
      fontFamily: 'lato-bold',
      fontSize: 22,
      color: '#ffffff'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      nameValid: false,
      phoneValid: false,
      emailValid: false,
      isLoading: true
    };
  }

  getInitialState() {
    return {
      styleNameInput: styles.inputText,
      styleEmailInput: styles.inputText,
      stylePhoneInput: styles.inputText
    };
  }

  onFocus(e) {
    switch (e) {
      case 'phone':
        this.setState({ stylePhoneInput: styles.inputTextFocus });
        break;

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
      case 'phone':
        this.setState({ stylePhoneInput: styles.inputText });
        break;

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

  validate = (value, type) => {
    let name = value;
    let email = value;
    let phone = value;
    let nameValid = false;
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
          //check duplicate email

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
      case 'phone':
        this.setState({
          phone: phone
        });
        break;
      default:
        break;
    }
  };

  submitEmployee(props) {
    this.setState({
      isLoading: true
    });

    data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    AsyncStorage.getItem('objEmp')
      .then(value => {
        if (value === null) {
          arr = [];
          arr.push(data);
          AsyncStorage.setItem('objEmp', JSON.stringify(arr));
          this.props.navigation.navigate('Main');
        } else {
          AsyncStorage.getItem('objEmp').then(
            keyValue => {
              arr2 = JSON.parse(keyValue);
              arr2.push(data);
              AsyncStorage.setItem('objEmp', JSON.stringify(arr2));
              // this.setState({
              //   name: '',
              //   email: '',
              //   phone: ''
              // });
              // this.props.navigation.state.params.onNavigateBack(this.state.foo);
            },
            error => {
              console.log(error); //Display error
            }
          );
        }
      })
      .done();
    this.submitAddEmployee(this.props);
  }

  submitAddEmployee(props) {
    fetch('https://my.tanda.co/api/v2/users/onboarding', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        scope: 'user',
        access_token:
          // '9f3f64f84a684f3f5ca4cefa43a42246ec2d8febe42e25f99b691d912148722d'
          'b138a7238d296dd0632cefd03c0401ff4ff274c141c50f31b06350278f09f499'
      })
    })
      .then(function(response) {
        console.log(response);
        // this.setState({
        //   name: '',
        //   email: '',
        //   phone: ''
        // });
        props.navigation.navigate('Main');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#3fafd7" />
        </View>
      );
    }
    return (
      <View style={styles.signUpForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="user" color="#536171" size={20} /> Full Name
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleNameInput]}
            onChangeText={e => this.validate(e, 'name')}
            placeholder="John Smith"
            // value={this.state.name}
            underlineColorAndroid="transparent"
            onFocus={() => this.onFocus('name')}
            onEndEditing={() => this.onEndEditing('name')}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="envelope" color="#536171" size={20} /> Email
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleEmailInput]}
            onChangeText={e => this.validate(e, 'email')}
            placeholder="johnsmith@tanda.co"
            underlineColorAndroid="transparent"
            // value={this.state.email}
            onFocus={() => this.onFocus('email')}
            onEndEditing={() => this.onEndEditing('email')}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="phone" color="#536171" size={20} /> Phone
          </Text>
          <TextInput
            style={[styles.inputText, this.state.stylePhoneInput]}
            keyboardType="numeric"
            onChangeText={e => this.validate(e, 'phone')}
            placeholder="Optional"
            // value={this.state.phone}
            underlineColorAndroid="transparent"
            onFocus={() => this.onFocus('phone')}
            onEndEditing={() => this.onEndEditing('phone')}
          />
        </View>
        <View style={styles.formGroup}>
          <Button
            onPress={() => this.submitEmployee()}
            title="Send Invite"
            buttonStyle={{
              backgroundColor: '#FFA526',
              width: '100%',
              height: 50,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 24,
              marginTop: 20,
              marginBottom: 20
            }}
            color="#ffffff"
            disabled={
              this.state.nameValid == false || this.state.emailValid == false
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#CAD2DE',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextFocus: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#3FAFD7',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextError: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D63C3A',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  formLabel: {
    color: '#536171',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'lato-bold'
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  },
  signUpForm: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  }
});
