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
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-input';
import axios from 'axios';
declare var Intl: Object;
import moment from 'moment-timezone';

export default class BusinessForm extends React.Component {
  static navigationOptions = {
    title: 'Business Details',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#3fafd7'
    },
    headerTitleStyle: {
      fontFamily: 'lato-bold',
      fontSize: 22,
      color: '#ffffff'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneCode: '',
      mobNum: '',
      business: '',
      staff: '',
      businessValid: false,
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
      styleBusinessInput: styles.inputText,
      styleStaffInput: styles.inputText
    };
  }

  updatePhone(number) {
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

  selectCountry(country) {
    let allCountries = this.phone.getAllCountries();
    var obj = allCountries.find(function(obj) {
      return obj.iso2 === country;
    });
    let phoneCode = '';
    phoneCode = obj.name + ': +' + obj.dialCode;

    this.setState({ phoneCode: phoneCode });
  }

  submitForm(name, email, password) {
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
      password: password,
      business_name: this.state.business,
      staff_count: this.state.staff,
      phonecode: phoneCode,
      phone: this.state.mobNum,
      time_zone: timezone,
      scope: 'user',
      signup_type: 'onboarding'
    };

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
        props.navigation.navigate('Main');
      })
      .catch(error => {
        console.log(error);
      });
  }

  onFocus(e) {
    switch (e) {
      case 'phone':
        this.setState({ stylePhoneInput: styles.inputTextFocus });
        break;

      case 'business':
        this.setState({ styleBusinessInput: styles.inputTextFocus });

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

      case 'business':
        if (this.state.businessValid) {
          this.setState({ styleBusinessInput: styles.inputText });
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
    let business = value;
    let staff = value;
    let businessValid = false;
    let staffValid = false;

    switch (type) {
      case 'business':
        businessValid = business.length > 0;
        if (businessValid) {
          this.setState({
            styleBusinessInput: styles.inputTextFocus,
            businessValid: true,
            business: business
          });
        } else {
          this.setState({
            styleBusinessInput: styles.inputTextError,
            businessValid: false
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
    const password = navigation.getParam('password');

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#3fafd7" />
        </View>
      );
    }

    return (
      <View style={styles.signUpForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="phone" color="#536171" size={20} /> Mobile Number
          </Text>
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
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="briefcase" color="#536171" size={20} /> What is the name
            of your business?
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleBusinessInput]}
            onBlur={e => this.validate('business')}
            onFocus={() => this.onFocus('business')}
            placeholder="Enter the name of your business"
            underlineColorAndroid="transparent"
            onChangeText={e => this.validate(e, 'business')}
            onEndEditing={() => this.onEndEditing('business')}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="users" color="#536171" size={20} /> How many staff do
            you have?
          </Text>
          <TextInput
            style={[styles.inputText, this.state.styleStaffInput]}
            keyboardType="numeric"
            placeholder="Enter the number of your staff"
            underlineColorAndroid="transparent"
            onBlur={e => this.validate('staff')}
            onFocus={() => this.onFocus('staff')}
            onChangeText={e => this.validate(e, 'staff')}
            onEndEditing={() => this.onEndEditing('staff')}
          />
        </View>
        <View style={styles.formGroup}>
          <Button
            onPress={() => this.submitForm(name, email, password)}
            title="Continue"
            buttonStyle={{
              backgroundColor: '#FFA526',
              width: '100%',
              height: 50,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 24,
              marginTop: 20,
              marginBottom: 20
            }}
            color="#ffffff"
            disabled={
              this.state.phoneValid == false ||
              this.state.businessValid == false ||
              this.state.staffValid == false
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#CAD2DE',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextFocus: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#3FAFD7',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  inputTextError: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D63C3A',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  formLabel: {
    color: '#536171',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'lato-bold'
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  },
  signUpForm: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  }
});
