import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  LayoutAnimation
} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

export default class RoleForm extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.roleForm}>
        <Text style={styles.text}>Are you a manager or an employee?</Text>
        <Button
          title="Manager"
          fontSize={22}
          buttonStyle={styles.buttonWhite}
          color="#ffffff"
          onPress={() => {
            this.props.navigation.navigate('TandaAccount');
          }}
        />
        <Button
          title="Employee"
          fontSize={22}
          buttonStyle={styles.buttonWhite}
          color="#ffffff"
          onPress={() => {
            this.props.navigation.navigate('CheckEmail');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roleForm: {
    flex: 4,
    backgroundColor: '#3fafd7',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50
  },
  text: {
    color: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 34
  },
  buttonWhite: {
    backgroundColor: 'transparent',
    width: '100%',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 20
  }
});
