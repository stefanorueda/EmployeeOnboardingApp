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
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import EmployeeOnboarding from '../EmployeeOnboarding';
import Integrations from '../Integrations';
import Account from '../Account';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import BusinessForm from '../BusinessForm';
import Modal from 'react-native-modal';

const BottomStack = createBottomTabNavigator(
  {
    Integrations: {
      screen: Integrations,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="link" color={tintColor} size={24} />
        )
      })
    },
    EmployeeOnboarding: {
      screen: EmployeeOnboarding,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" color={tintColor} size={24} />
        )
      })
    },
    Account: {
      screen: Account,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      })
    }
  },

  {
    initialRouteName: 'EmployeeOnboarding',
    tabBarOptions: {
      initialRouteName: 'EmployeeOnboarding',
      showLabel: false,
      activeTintColor: '#3fafd7', // active icon color
      inactiveTintColor: '#DAE0E8', // inactive icon color
      style: {
        backgroundColor: '#ffffff',
        borderTopColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0
      }
    }
  }
);

handleOnNavigateBack = foo => {
  console.log('zxc');
  this.forceUpdate();
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: []
    };
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  static navigationOptions = ({ navigation }) => ({
    title: 'Employee Onboarding',
    headerLeft: null,
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#3fafd7'
    },
    headerTitleStyle: {
      fontFamily: 'lato-bold',
      fontSize: 22,
      color: '#ffffff'
    },
    headerRight: (
      <Button
        title={<Icon name="user-plus" color="white" size={28} />}
        onPress={() =>
          navigation.navigate('AddEmployee', {
            onNavigateBack: this.handleOnNavigateBack.bind(this)
          })
        }
        // onPress={navigation.state.params._toggleModal}
        buttonStyle={{ backgroundColor: 'transparent' }}
      />
    )
    // header: null
  });

  render() {
    return (
      <React.Fragment>
        <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
          {/* <KeyboardAvoidingView> */}
          <View style={{ flex: 1 }}>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={this._toggleModal}>
                <Icon
                  name="times"
                  color="#CAD2DE"
                  size={28}
                  style={{ textAlign: 'right' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalTitleRow}>
              <Text style={styles.modalTitle}>Invite Staff</Text>
            </View>
            <View style={styles.rowInput}>
              <TextInput
                style={styles.inputText}
                placeholder="Employee name"
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputText}
                placeholder="Employee email"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.rowButton}>
              <Button
                title="Send form"
                fontSize={22}
                buttonStyle={styles.buttonGreen}
                color="#ffffff"
                onPress={() => {
                  this.props.navigation.navigate('StaffForm');
                }}
              />
            </View>
          </View>
        </Modal>
        {/* <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity> */}
        <BottomStack initialRouteName={'EmployeeOnboarding'} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#ffffff',
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 150,
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
    // alignItems: 'center',
    padding: 20,
    flex: 1
  },
  iconRow: {
    textAlign: 'right'
  },
  modalTitleRow: {
    marginBottom: 20
  },
  modalTitle: {
    fontSize: 24,
    color: '#536171',
    textAlign: 'center',
    fontFamily: 'lato-bold'
  },
  buttonGreen: {
    backgroundColor: '#99CA2F',
    width: '100%',
    borderColor: '#99CA2F',
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
    flex: 0.5
  },
  rowInput: {
    flex: 4,
    alignSelf: 'stretch'
  },
  rowButton: {
    flex: 1
  }
});
