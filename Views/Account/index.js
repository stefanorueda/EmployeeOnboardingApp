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
import { Font } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigator } from "react-navigation";

export default class Account extends React.Component {
  static navigationOptions = {
    title: "Account",
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#3fafd7"
    },
    headerTitleStyle: {
      fontFamily: "lato-bold",
      fontSize: 22,
      color: "#ffffff"
    }
  };
  render() {
    return <Text>account</Text>;
  }
}
