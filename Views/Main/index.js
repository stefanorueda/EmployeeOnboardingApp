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
import { createStackNavigator } from "react-navigation";
import BusinessForm from "../BusinessForm";

const BottomStack = createBottomTabNavigator(
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
      }
    }
  }
);

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Employee Onboarding",
    headerLeft: null,
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#3fafd7"
    },
    headerTitleStyle: {
      fontFamily: "lato-bold",
      fontSize: 22,
      color: "#ffffff"
    },
    headerRight: (
      <Button
        title={<Icon name="user-plus" color="white" size={28} />}
        onPress={() => navigation.navigate("AddEmployee")}
        buttonStyle={{ backgroundColor: "transparent" }}
      />
    )
  });

  render() {
    return <BottomStack />;
  }
}
