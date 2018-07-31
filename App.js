import React from "react";
import { StackNavigator } from "react-navigation";
import Home from "./Views/Home";
import SignupForm from "./Views/SignupForm";
import SigninForm from "./Views/SigninForm";
import BusinessForm from "./Views/BusinessForm";
import Guide from "./Views/Guide";
import { Font } from "expo";

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    SignupForm: { screen: SignupForm },
    SigninForm: { screen: SigninForm },
    BusinessForm: { screen: BusinessForm },
    Guide: { screen: Guide }
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
