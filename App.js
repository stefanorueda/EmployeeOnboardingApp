import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./Views/Home";
import SignupForm from "./Views/SignupForm";
import SigninForm from "./Views/SigninForm";
import BusinessForm from "./Views/BusinessForm";
import Guide from "./Views/Guide";
import Main from "./Views/Main";
import { Font } from "expo";
import EmployeeOnboarding from "./Views/EmployeeOnboarding";
import Account from "./Views/Account";
import AddEmployee from "./Views/AddEmployee";

const RootStack = createStackNavigator(
  {
    // Guide: { screen: Guide },
    Home: { screen: Home },
    SignupForm: { screen: SignupForm },
    SigninForm: { screen: SigninForm },
    BusinessForm: { screen: BusinessForm },
    Main: { screen: Main },
    EmployeeOnboarding: { screen: EmployeeOnboarding },
    Account: { screen: Account },
    AddEmployee: { screen: AddEmployee }
  },
  { headerMode: "screen" }
);

export default class App extends React.Component {
  constructor() {
    super();

    Font.loadAsync({
      "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
      "lato-bold": require("./assets/fonts/Lato-Bold.ttf")
    });
  }
  render() {
    return <RootStack />;
  }
}
