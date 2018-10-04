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
  ScrollView
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

export default class StaffForm extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      index: 2,
      display: true,
      businessName: '',
      businessAddress: '',
      businessNameValid: false,
      businessAddressValid: false
    };
  }

  getInitialState() {
    return {
      styleBusinessNameInput: styles.inputText,
      styleBusinessAddressInput: styles.inputText
    };
  }

  validate = (value, type) => {
    let businessName = value;
    let businessAddress = value;
    let businessNameValid = false;
    let businessAddressValid = false;

    switch (type) {
      case 'businessName':
        businessNameValid = businessName.length > 0;
        if (businessNameValid) {
          this.setState({
            styleBusinessNameInput: styles.inputTextFocus,
            businessNameValid: true,
            businessName: businessName
          });
        } else {
          this.setState({
            styleBusinessNameInput: styles.inputTextError,
            businessNameValid: false
          });
        }
        break;
      case 'businessAddress':
        businessAddressValid = businessAddress.length > 0;
        if (businessAddressValid) {
          this.setState({
            styleBusinessAddressInput: styles.inputTextFocus,
            businessAddressValid: true,
            businessAddress: businessAddress
          });
        } else {
          this.setState({
            styleBusinessAddressInput: styles.inputTextError,
            businessAddressValid: false
          });
        }
        break;

      default:
        break;
    }
  };

  onFocus(e) {
    switch (e) {
      case 'businessName':
        this.setState({ styleBusinessNameInput: styles.inputTextFocus });
        break;
      case 'businessAddress':
        this.setState({ styleBusinessAddressInput: styles.inputTextFocus });
        break;
      default:
        break;
    }
  }

  onEndEditing(e) {
    switch (e) {
      case 'businessName':
        if (this.state.businessNameValid) {
          this.setState({ styleBusinessNameInput: styles.inputText });
        }
        break;
      case 'businessAddress':
        if (this.state.businessAddressValid) {
          this.setState({ styleBusinessAddressInput: styles.inputText });
        }
        break;
      default:
        break;
    }
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const email = navigation.getParam('email');
    return (
      <View style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.title}>Let's get you set up!</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <View style={styles.rowQuestion}>
              <Text style={styles.formQuestion}>
                Where are your staff working?
              </Text>
            </View>
            <View style={styles.rowInput}>
              <View style={styles.row}>
                <TextInput
                  placeholder="Business name"
                  underlineColorAndroid="transparent"
                  onEndEditing={() => this.onEndEditing('businessName')}
                  onChangeText={e => this.validate(e, 'businessName')}
                  style={[styles.inputText, this.state.styleBusinessNameInput]}
                  autoCapitalize="words"
                  onFocus={() => this.onFocus('businessName')}
                  value={this.state.businessName}
                />
              </View>
              <View style={styles.row}>
                <TextInput
                  placeholder="Business address"
                  underlineColorAndroid="transparent"
                  onEndEditing={() => this.onEndEditing('businessAddress')}
                  onChangeText={e => this.validate(e, 'businessAddress')}
                  style={[
                    styles.inputText,
                    this.state.styleBusinessAddressInput
                  ]}
                  onFocus={() => this.onFocus('businessAddress')}
                  value={this.state.businessAddress}
                />
              </View>
              {/* <View style={styles.row}>
                <View style={styles.col1}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="City"
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.col2}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="State"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View> */}
              {/* <View style={styles.row}>
                <View style={styles.col1}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="Country"
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.col2}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="Zip code"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View> */}
            </View>

            <View style={styles.rowButton}>
              <Button
                title="Next"
                fontSize={22}
                buttonStyle={styles.buttonBlue}
                color="#ffffff"
                onPress={() => {
                  this.props.navigation.navigate('SecurityForm', {
                    businessName: this.state.businessName,
                    businessAddress: this.state.businessAddress,
                    name: name,
                    email: email
                  });
                }}
                disabled={
                  this.state.businessNameValid == false ||
                  this.state.businessAddressValid == false
                }
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
    paddingTop: 60,
    width: '100%',
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
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'lato-bold',
    fontWeight: '600'
  },
  formQuestion: {
    fontSize: 27,
    color: '#536171',
    fontWeight: '600',
    alignItems: 'center',
    fontFamily: 'lato'
  },
  buttonBlue: {
    backgroundColor: '#3fafd7',
    width: '100%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 6,
    marginBottom: 6
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#DAE0E8',
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 8,
    fontSize: 20,
    marginTop: 12,
    marginBottom: 12,
    width: '100%'
  },
  rowQuestion: {
    flex: 0.5
  },
  rowInput: {
    flex: 4,
    alignSelf: 'stretch'
  },
  rowButton: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  col1: {
    flexDirection: 'column',
    width: '50%',
    paddingRight: 5
  },
  col2: {
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 5
  },
  inputTextFocus: {
    borderWidth: 1,
    borderColor: '#3FAFD7'
  },
  inputTextError: {
    borderWidth: 1,
    borderColor: '#D63C3A'
  }
});
