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
import SignupForm from '../SignupForm';
import SigninForm from '../SigninForm';
import BusinessForm from '../BusinessForm';
import { Font } from 'expo';

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

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

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
        {/* <View style={styles.header}>
          <Text style={styles.textLogo}>Employee Onboarding</Text>
        </View> */}
        {/* <View style={styles.navbar}>
          <View style={styles.formTabs}>
            <Button
              onPress={() => this.onSignup(2, true)}
              title="Sign In"
              buttonStyle={
                this.state.index === 2
                  ? styles.navButton
                  : styles.navButtonDisabled
              }
              textStyle={
                this.state.index === 2
                  ? { fontFamily: "lato-bold" }
                  : { fontFamily: "lato-regular" }
              }
              color={this.state.index === 2 ? "#ffffff" : "#536171"}
            />
          </View>
          <View style={styles.formTabs}>
            <Button
              onPress={() => this.onSignup(0, false)}
              title="Sign Up"
              buttonStyle={
                this.state.index === 0
                  ? styles.navButton
                  : styles.navButtonDisabled
              }
              textStyle={
                this.state.index === 0
                  ? { fontFamily: "lato-bold" }
                  : { fontFamily: "lato-regular" }
              }
              color={this.state.index === 0 ? "#ffffff" : "#536171"}
            />
          </View>
        </View> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.signUpForm}>
            <SignupForm navigation={this.props.navigation} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#3fafd7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
    flex: 0.5,
    backgroundColor: '#F0F2F5',
    flexDirection: 'row'
  },
  container: {
    flex: 1
  },
  signUpForm: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },

  formTabs: {
    flexDirection: 'column',
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navLabelActive: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3FAFD7'
  },
  navLabel: {
    fontSize: 18,
    color: '#536171'
  },
  navButton: {
    backgroundColor: '#FFA526',
    borderRadius: 24,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 25,
    paddingLeft: 25
  },
  navButtonDisabled: {
    backgroundColor: 'transparent'
  },
  textLogo: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'lato-bold'
  }
});
