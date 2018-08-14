import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  LayoutAnimation
} from "react-native";
import { Button } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import BusinessForm from "../BusinessForm";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default class SignupForm extends React.Component {
  static navigationOptions = {
    headerTitle: <Text>Next Steps</Text>
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      nameValid: false,
      emailValid: false,
      passwordValid: false
    };
  }

  getInitialState() {
    return {
      styleNameInput: styles.inputText,
      styleEmailInput: styles.inputText,
      stylePasswordInput: styles.inputText
    };
  }

  onFocus(e) {
    switch (e) {
      case "name":
        this.setState({ styleNameInput: styles.inputTextFocus });
        break;

      case "email":
        this.setState({ styleEmailInput: styles.inputTextFocus });

        break;
      case "password":
        this.setState({ stylePasswordInput: styles.inputTextFocus });
        break;
      default:
        break;
    }
  }

  validate = type => {
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    let nameValid = false;
    let passwordValid = false;
    let emailRegex = false;

    switch (type) {
      case "name":
        nameValid = name.length > 0;
        if (nameValid) {
          this.setState({ styleNameInput: styles.inputText, nameValid: true });
        } else {
          this.setState({
            styleNameInput: styles.inputTextError,
            nameValid: false
          });
        }
        break;
      case "email":
        emailRegex = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailRegex) {
          //check duplicate email
          axios
            .get(`https://my.tanda.co/try/validate_email?email=` + email)
            .then(res => {
              console.log(res.data);
              if (res.data) {
                this.setState({
                  styleEmailInput: styles.inputText,
                  emailValid: true
                });
              } else {
                this.setState({
                  styleEmailInput: styles.inputTextError,
                  emailValid: false
                });
              }
            });
        } else {
          this.setState({
            styleEmailInput: styles.inputTextError,
            emailValid: false
          });
        }
        break;
      case "password":
        passwordValid = password.length > 8;
        if (passwordValid) {
          this.setState({
            stylePasswordInput: styles.inputText,
            passwordValid: true
          });
        } else {
          this.setState({
            stylePasswordInput: styles.inputTextError,
            passwordValid: false
          });
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="user" color="#536171" size={20} /> Name
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleNameInput]}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            placeholder="Enter your full name"
            underlineColorAndroid="transparent"
            onBlur={e => this.validate("name")}
            onFocus={() => this.onFocus("name")}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="envelope" color="#536171" size={20} /> Email
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleEmailInput]}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Enter your email"
            underlineColorAndroid="transparent"
            onBlur={e => this.validate("email")}
            onFocus={() => this.onFocus("email")}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="lock" color="#536171" size={20} /> Create your password
          </Text>
          <TextInput
            style={[styles.inputText, this.state.stylePasswordInput]}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="at least 9 characters"
            underlineColorAndroid="transparent"
            onBlur={e => this.validate("password")}
            onFocus={() => this.onFocus("password")}
          />
        </View>

        <View style={styles.formGroup}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("BusinessForm", {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
              });
            }}
            title="Get Started!"
            buttonStyle={{
              backgroundColor: "#FFA526",
              width: "100%",
              height: 50,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 24,
              marginTop: 20,
              marginBottom: 20
            }}
            disabled={
              this.state.nameValid == false ||
              this.state.emailValid == false ||
              this.state.passwordValid == false
            }
            color="#ffffff"
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
    borderColor: "#CAD2DE",
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextFocus: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#3FAFD7",
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextError: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#D63C3A",
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  formLabel: {
    color: "#536171",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "lato-bold"
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  }
});
