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

export default class TandaAccount extends React.Component {
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
          <Text style={styles.title}>Manager</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <Text style={styles.formQuestion}>
              Do you have a Tanda account?
            </Text>
            <Button
              title="Yes"
              fontSize={22}
              buttonStyle={styles.buttonBlue}
              color="#ffffff"
              onPress={() => {
                this.props.navigation.navigate('NameEmailForm');
              }}
            />
            <Button
              title="No"
              fontSize={22}
              buttonStyle={styles.buttonBlue}
              color="#ffffff"
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
  },
  container: {
    flex: 1,
    backgroundColor: '#3fafd7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 40,
    paddingRight: 40,
    width: '100%',
    paddingTop: 20,
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

    fontFamily: 'lato-bold'
  },
  formQuestion: {
    fontSize: 27,
    color: '#536171',
    marginTop: 60,
    marginBottom: 35,
    textAlign: 'center',
    fontWeight: '600'
    // fontFamily: 'lato-bold'
  },
  buttonBlue: {
    backgroundColor: '#3fafd7',
    width: '100%',
    borderColor: '#3fafd7',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 6,
    marginBottom: 6
  }
});
