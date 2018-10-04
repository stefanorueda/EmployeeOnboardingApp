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
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BusinessForm from '../BusinessForm';
import Modal from 'react-native-modal';

export default class EmployeeOnboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [],
      isModalVisible: false
    };
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  // componentDidMount() {
  //   AsyncStorage.getItem("objEmp").then(
  //     keyValue => {
  //       console.log("asd");
  //       arr2 = JSON.parse(keyValue);
  //       this.setState({
  //         emp: arr2
  //       });
  //     },
  //     error => {
  //       console.log(error); //Display error
  //     }
  //   );
  // }

  perCards() {
    return this.state.emp
      .slice(0)
      .reverse()
      .map((el, i) => (
        <View style={styles.cardEmployee}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>{el.name}</Text>
            <Text style={styles.labelDesc}>{el.email}</Text>
          </View>
          <View style={styles.cardCol2}>
            <Text style={styles.labelDesc}>asda</Text>
          </View>
        </View>
      ));
  }

  onPress = () => {
    // const { navigation, route, params } = this.props;
    // navigation.navigate("SignupForm");
    // AsyncStorage.clear();
  };

  render() {
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem('objEmp').then(
      keyValue => {
        if (keyValue == null || keyValue == '') {
          this.setState({
            emp: []
          });
        } else {
          arr2 = JSON.parse(keyValue);
          this.setState({
            emp: arr2
          });
        }
      },
      error => {
        console.log(error); //Display error
      }
    );
    return (
      <React.Fragment>
        <View style={{ flex: 4.5 }}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            indicatorStyle={'black'}
          >
            {this.perCards()}
          </ScrollView>
        </View>
      </React.Fragment>
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
  cardNewLabel: {
    fontSize: 18,
    color: '#8A9BAE',
    fontFamily: 'lato-bold'
  },
  cardNewEmployee: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#536171',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 15
  },
  cardSuccess: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 10,
    marginBottom: 15,
    borderLeftWidth: 10,
    borderLeftColor: '#99CA2F'
  },
  cardEmployee: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 10,
    marginBottom: 15
  },
  cardCol1: {
    flexDirection: 'column',
    flex: 70
  },
  cardCol2: {
    flexDirection: 'column',
    flex: 20
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff'
  },
  labelName: {
    fontSize: 24,
    color: '#3fafd7',
    fontFamily: 'lato-bold'
  },
  labelDesc: {
    fontSize: 16,
    color: '#708093',
    fontFamily: 'lato-regular'
  },
  buttonDanger: {
    backgroundColor: '#D63C3A',
    width: '100%',
    height: 35,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    padding: 5
  },
  buttonSuccess: {
    backgroundColor: '#99CA2F',
    width: '100%',
    height: 35,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    padding: 3
  },
  inputText: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#CAD2DE',
    height: 40,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F0F2F5'
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  },
  searchContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff'
  },
  rowHeader: {
    flex: 0.4,
    backgroundColor: '#3FAFD7',
    flexDirection: 'row',
    textAlignVertical: 'bottom'
    // paddingLeft: 30,
    // paddingBottom: 15
  },
  rowContent: {
    flex: 3.5,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 28,
    fontFamily: 'lato-bold',
    color: '#ffffff',
    position: 'absolute',
    bottom: 10
  },

  rowCol1: {
    flexDirection: 'column',
    width: '20%'
  },
  rowCol2: {
    flexDirection: 'column',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowCol3: {
    flexDirection: 'column',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
    // textAlign: 'right'
  },
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
