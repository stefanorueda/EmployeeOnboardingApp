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
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";
import SignupForm from "./Views/SignupForm";
import SigninForm from "./Views/SigninForm";

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

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 2,
      display: true
    };
  }

  onSignup(index, display) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({ index: index, display: display });
    console.log(index);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ flex: this.state.index, backgroundColor: "#3fafd7" }} />
        <View style={styles.navbar}>
          <View style={styles.formTabs}>
            <Button
              onPress={() => this.onSignup(2, true)}
              title="Sign In"
              buttonStyle={{
                backgroundColor: "none"
              }}
              color={this.state.index === 2 ? "#3FAFD7" : "#536171"}
            />
          </View>
          <View style={styles.formTabs}>
            <Button
              onPress={() => this.onSignup(0, false)}
              title="Sign Up"
              buttonStyle={{
                backgroundColor: "none"
              }}
              color={this.state.index === 0 ? "#3FAFD7" : "#536171"}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.signUpForm}>
            {this.state.display && <SigninForm />}
            {!this.state.display && <SignupForm />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: "#3fafd7"
  },
  navbar: {
    flex: 0.5,
    backgroundColor: "#F0F2F5",
    flexDirection: "row"
  },
  container: {
    flex: 1
  },
  signUpForm: {
    flex: 4,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },

  formTabs: {
    flexDirection: "column",
    flex: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  navLabelActive: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3FAFD7"
  },
  navLabel: {
    fontSize: 18,
    color: "#536171"
  }
});
