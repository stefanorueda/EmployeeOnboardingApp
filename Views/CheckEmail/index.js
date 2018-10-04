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
  Image,
  Linking
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

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

export default class CheckEmail extends React.Component {
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

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.title}>Employee</Text>
        </View>
        <View style={styles.bgImage}>
          <Image
            source={require('../../img/lostemployee.png')}
            style={styles.lostEmpImage}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <Text style={styles.formQuestion}>You’re a bit lost.</Text>
            <Text style={styles.formQuestion}>
              Check your email if you have received an invite from your manager,
              otherwise ask them to send you the onboarding link.
            </Text>

            <Button
              title="Got it! I'll check my email"
              fontSize={22}
              buttonStyle={styles.buttonBlue}
              color="#ffffff"
              onPress={() =>
                Linking.openURL('https://mail.google.com/mail/u/0/')
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    backgroundColor: '#3fafd7',
    alignItems: 'center',
    justifyContent: 'center'
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    // flexDirection: 'row'
  },
  bgImage: {
    flex: 1.5,
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
    flex: 3,
    backgroundColor: '#FFFFFF',
    paddingLeft: 40,
    paddingRight: 40,
    width: '100%',
    paddingTop: 50,
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
    height: '100%'
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '500',
    fontFamily: 'lato-bold'
  },
  formQuestion: {
    opacity: 0.7,
    fontSize: 22,
    color: '#8A(BAE',
    marginLeft: 10,
    marginRight: 10,

    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
    // fontFamily: 'lato-bold'
  },
  buttonBlue: {
    backgroundColor: '#3fafd7',
    width: '100%',
    borderColor: '#3fafd7',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 50,
    marginBottom: 6
  },
  lostEmpImage: {
    position: 'absolute',
    top: 20
    //   left: 0
    //   width: '100%',
    //   height: '100%'
  }
});
