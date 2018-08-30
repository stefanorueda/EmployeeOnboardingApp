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

export default class EmployeeOnboarding extends React.Component {
  static navigationOptions = {
    title: 'Employee Onboarding',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#3fafd7'
    },
    headerTitleStyle: {
      fontFamily: 'lato-bold',
      fontSize: 22,
      color: 'black'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      emp: []
    };
  }

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
        <View style={styles.cardDanger}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>{el.name}</Text>
            <Text style={styles.labelDesc}>
              <Icon name="envelope-square" size={20} color="#3fafd7" />{' '}
              {el.email}
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="phone" size={20} color="#3fafd7" /> {el.phone}
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="check" size={20} color="#99CA2F" /> Invitation Sent
            </Text>
          </View>
          <View style={styles.cardCol2}>
            <Button
              title="Incomplete"
              buttonStyle={styles.buttonDanger}
              color="#ffffff"
            />
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
      <View style={{ flex: 1 }}>
        {/* <View style={styles.searchContainer}>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.inputText}
              inlineImageLeft="search_icon"
              // keyboardType="numeric"
              // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
              // value={this.state.ftWorkingWeek}
              placeholder={"Search Employee"}
              underlineColorAndroid="transparent"
            />
          </View>
        </View> */}
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={this.onPress}> */}
          <View style={styles.cardNewEmployee}>
            <Text style={styles.cardNewLabel}>
              <Icon name="user-plus" size={20} color="#8A9BAE" /> Add New
              Employee
            </Text>
          </View>
          {/* </TouchableOpacity> */}
        </View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          indicatorStyle={'black'}
        >
          {this.perCards()}
        </ScrollView>
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
  cardDanger: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 10,
    marginBottom: 15,
    borderLeftWidth: 10,
    borderLeftColor: '#D63C3A'
  },
  cardCol1: {
    flexDirection: 'column',
    flex: 60
  },
  cardCol2: {
    flexDirection: 'column',
    flex: 40
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  labelName: {
    fontSize: 24,
    color: '#536171',
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
    paddingTop: 20
  }
});
