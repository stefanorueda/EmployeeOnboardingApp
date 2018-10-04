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
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import Modal from 'react-native-modal';
import Atologo from './../../img/ato-logo.png';

export default class FirstOnboard extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };

    this.redirectMain = this.redirectMain.bind(this);
  }

  redirectMain(props) {
    Keyboard.dismiss();
    this.forceUpdate();
    this.setState({
      isModalVisible: false
    });

    this.props.navigation.navigate('Main');
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.firstOnboardForm}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.text}>Let's onboard your first staff!</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.inputText}
              placeholder="Employee name"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.inputText}
              placeholder="Employee email"
              underlineColorAndroid="transparent"
            />
          </View>
          <Button
            title="Send form"
            fontSize={22}
            buttonStyle={styles.buttonGreen}
            color="#ffffff"
            onPress={this._toggleModal}
          />
        </KeyboardAvoidingView>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Congratulations!!!</Text>
            <Text style={styles.subtitle}>You’ve added your first staff!</Text>
            <Text style={styles.desc}>
              You’ve just eliminated manual paperwork and repetitive data entry!
            </Text>
            <Text style={styles.label}>Other cool things you can do:</Text>
            <View style={styles.card}>
              <View style={styles.cardCol1}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.cardCol2}>
                <Text style={{ color: '#8A9BAE' }}>
                  Automatically lodge your employee's Tax File Numbers with the
                  ATO using Tanda
                </Text>
              </View>
              <View style={styles.cardCol3}>
                <Icon name="chevron-right" color="#3fafd7" size={20} />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardCol1}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.cardCol2}>
                <Text style={{ color: '#8A9BAE' }}>
                  Eliminate double entry with Tanda's Payroll and accounting
                  integrations
                </Text>
              </View>
              <View style={styles.cardCol3}>
                <Icon name="chevron-right" color="#3fafd7" size={20} />
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardCol1}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.cardCol2}>
                <Text style={{ color: '#8A9BAE' }}>
                  Track Time, schedule, etc with Tanda
                </Text>
              </View>
              <View style={styles.cardCol3}>
                <Icon name="chevron-right" color="#3fafd7" size={20} />
              </View>
            </View>
          </View>
          <Text style={styles.inviteText} onPress={() => this.redirectMain()}>
            I'd like to invite more staff
          </Text>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstOnboardForm: {
    flex: 4,
    backgroundColor: '#3fafd7',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonGreen: {
    backgroundColor: '#93C732',
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    height: 50,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DAE0E8',
    shadowOpacity: 0,
    fontFamily: 'lato-bold'
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#DAE0E8',
    backgroundColor: '#FFFFFF',
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
  inviteText: {
    marginBottom: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    textDecorationLine: 'underline'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 52,
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: '#3fafd7',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    color: '#536171;',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  desc: {
    color: '#536171;',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 60
  },
  label: {
    color: '#3fafd7',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 10,
    marginBottom: 15,
    flexDirection: 'row'
  },
  cardCol1: {
    flexDirection: 'column',
    flex: 20
  },
  cardCol2: {
    flexDirection: 'column',
    flex: 75
  },
  cardCol3: {
    flexDirection: 'column',
    flex: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flowDirection: 'row'
  }
});
