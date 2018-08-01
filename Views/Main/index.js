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
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Button } from "react-native-elements";
import { Font } from "expo";
import EmployeeOnboarding from "../EmployeeOnboarding";
import Account from "../Account";
import Icon from "react-native-vector-icons/FontAwesome";

export default createBottomTabNavigator(
  {
    EmployeeOnboarding: {
      screen: EmployeeOnboarding,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" color={tintColor} size={24} />
        )
      })
    },
    Account: {
      screen: Account,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: "#ffffff", // active icon color
      inactiveTintColor: "#CAD2DE", // inactive icon color
      style: {
        backgroundColor: "#3fafd7" // TabBar background
      } // hide labels);
    }
  }
);

class Main extends React.Component {
  //   render() {
  //     return <Text>asdasd</Text>;
  //   }
}
