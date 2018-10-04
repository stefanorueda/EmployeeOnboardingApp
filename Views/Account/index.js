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

export default class Account extends React.Component {
  static navigationOptions = {
    title: 'Account',
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
  render() {
    return (
      <React.Fragment>
        <View style={styles.rowHeader}>
          <View style={styles.titleContainer} bottom>
            <Text style={styles.title}>John Der</Text>
          </View>
        </View>
        <View style={styles.rowContent}>
          <Text>John Der</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  rowHeader: {
    flex: 0.8,
    backgroundColor: '#F0F2F5',
    flexDirection: 'row',
    textAlignVertical: 'bottom',
    paddingLeft: 30,
    paddingBottom: 15
  },
  rowContent: {
    flex: 3,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 28,
    fontFamily: 'lato-bold',
    color: '#536171',
    position: 'absolute',
    bottom: 10
  },
  titleContainer: {
    flexDirection: 'column'
  }
});
