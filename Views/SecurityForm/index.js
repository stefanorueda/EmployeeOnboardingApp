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
  ActivityIndicator
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import BusinessForm from '../BusinessForm';
import { Font } from 'expo';

import PhoneInput from 'react-native-phone-input';
import axios from 'axios';
declare var Intl: Object;
import moment from 'moment-timezone';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from 'react-native-indicators';

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

export default class SecurityForm extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      index: 2,
      display: true,
      phoneCode: '',
      mobNum: '',
      password: '',
      staff: '',
      passwordValid: false,
      phoneValid: false,
      staffValid: false,
      isLoading: true
    };

    this.submitForm = this.submitForm.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  getInitialState() {
    return {
      stylePhoneInput: styles.inputText,
      stylePasswordInput: styles.inputText,
      styleStaffInput: styles.inputText
    };
  }

  selectCountry(country) {
    let allCountries = this.phone.getAllCountries();
    var obj = allCountries.find(function(obj) {
      return obj.iso2 === country;
    });
    let phoneCode = '';
    phoneCode = obj.name + ': +' + obj.dialCode;

    this.setState({ phoneCode: phoneCode });
  }

  submitForm(name, email, businessName, businessAddress) {
    this.forceUpdate();
    this.setState({
      isLoading: true
    });
    let allCountries = this.phone.getAllCountries();
    let ct = this.phone.getISOCode();

    var obj = allCountries.find(function(obj) {
      return obj.iso2 === ct;
    });
    phoneCode = obj.name + ': +' + obj.dialCode;

    var timezone = moment.tz.guess();

    let data = {
      name: name,
      email: email,
      password: this.state.password,
      business_name: businessName,
      phonecode: phoneCode,
      phone: this.state.mobNum,
      time_zone: timezone,
      scope: 'user',
      signup_type: 'onboarding'
    };
    console.log(data);
    this.submitProduct(data, this.props);
  }

  submitProduct(data, props) {
    console.log(data);
    axios({
      method: 'post',
      url: 'https://staging.tanda.co/api/v2/sign_up',
      dataType: 'json',
      data: data,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function(response) {
        props.navigation.navigate('FirstOnboard');
      })
      .catch(error => {
        console.log(error);
      });
  }

  updatePhone(number) {
    console.log('asd');
    if (this.phone.isValidNumber()) {
      this.setState({
        mobNum: this.phone.getValue(),
        phoneValid: true,
        stylePhoneInput: styles.inputText
      });
    } else {
      this.setState({
        phoneValid: false,
        stylePhoneInput: styles.inputTextError
      });
    }
  }

  onFocus(e) {
    switch (e) {
      case 'phone':
        this.setState({ stylePhoneInput: styles.inputTextFocus });
        break;

      case 'password':
        this.setState({ stylePasswordInput: styles.inputTextFocus });

        break;
      case 'staff':
        this.setState({ styleStaffInput: styles.inputTextFocus });
        break;
      default:
        break;
    }
  }

  onEndEditing(e) {
    switch (e) {
      case 'phone':
        if (this.state.phoneValid) {
          this.setState({ stylePhoneInput: styles.inputText });
        }
        break;

      case 'password':
        if (this.state.passwordValid) {
          this.setState({ stylePasswordInput: styles.inputText });
        }
        break;
      case 'staff':
        if (this.state.staffValid) {
          this.setState({ styleStaffInput: styles.inputText });
        }
        break;
      default:
        break;
    }
  }

  validate = (value, type) => {
    let password = value;
    let staff = value;
    let businessValid = false;
    let staffValid = false;

    switch (type) {
      case 'password':
        passwordValid = password.length > 8;
        if (passwordValid) {
          this.setState({
            stylePasswordInput: styles.inputTextFocus,
            passwordValid: true,
            password: password
          });
        } else {
          this.setState({
            stylePasswordInput: styles.inputTextError,
            passwordValid: false
          });
        }
        break;
      case 'staff':
        staffValid = staff > 0;
        if (staffValid) {
          this.setState({
            styleStaffInput: styles.inputTextFocus,
            staffValid: true,
            staff: staff
          });
        } else {
          this.setState({
            styleStaffInput: styles.inputTextError,
            staffValid: false
          });
        }
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const email = navigation.getParam('email');
    const businessName = navigation.getParam('businessName');
    const businessAddress = navigation.getParam('businessAddress');

    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <BallIndicator color="#3fafd7" />
        </View>
      );
    }

    return (
      <View style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.title}>Let's get you set up!</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <View style={styles.rowQuestion}>
              <Text style={styles.formQuestion}>
                Your staff will be providing sensitive data. Let’s keep it
                secured!
              </Text>
            </View>
            <View style={styles.rowInput}>
              <TextInput
                style={[styles.inputText, this.state.stylePasswordInput]}
                secureTextEntry={true}
                onChangeText={e => this.validate(e, 'password')}
                defaultValue={this.state.password}
                placeholder="at least 9 characters"
                underlineColorAndroid="transparent"
                onFocus={() => this.onFocus('password')}
                onEndEditing={() => this.onEndEditing('password')}
              />
              <PhoneInput
                textProps={{
                  onFocus: () => this.onFocus('phone'),
                  onBlur: () => this.updatePhone('number'),
                  onEndEditing: () => this.onEndEditing('phone')
                }}
                style={[styles.inputText, this.state.stylePhoneInput]}
                ref={ref => {
                  this.phone = ref;
                }}
                onSelectCountry={country => {
                  this.selectCountry(country);
                }}
              />
              <Text style={styles.formLabel}>
                We’ll just send a verification code to know it’s you
              </Text>
            </View>
            <View style={styles.rowButton}>
              <Button
                title="Next"
                fontSize={22}
                buttonStyle={styles.buttonBlue}
                color="#ffffff"
                onPress={() =>
                  this.submitForm(name, email, businessName, businessAddress)
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
  formLabel: {
    color: '#CAD2DE',
    fontSize: 16
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
    textAlign: 'center',
    fontFamily: 'lato'
  },
  buttonBlue: {
    backgroundColor: '#3fafd7',
    width: '100%',
    borderColor: '#3fafd7',
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
    marginBottom: 12
  },
  rowQuestion: {
    flex: 1
  },
  rowInput: {
    flex: 4,
    alignSelf: 'stretch'
  },
  rowButton: {
    flex: 1
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
