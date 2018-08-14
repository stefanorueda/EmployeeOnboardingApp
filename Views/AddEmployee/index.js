import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  LayoutAnimation
} from "react-native";
import { Button } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AddEmployee extends React.Component {
  static navigationOptions = {
    title: "New Employee",
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#3fafd7"
    },
    headerTitleStyle: {
      fontFamily: "lato-bold",
      fontSize: 22,
      color: "#ffffff"
    }
  };

  render() {
    return (
      <View style={styles.signUpForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="user" color="#536171" size={20} /> Full Name
          </Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="John Smith"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="envelope" color="#536171" size={20} /> Email
          </Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="johnsmith@tanda.co"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="phone" color="#536171" size={20} /> Phone
          </Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Optional"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.formGroup}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Main");
            }}
            title="Send Invite"
            buttonStyle={{
              backgroundColor: "#FFA526",
              width: "100%",
              height: 50,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 24,
              marginTop: 20,
              marginBottom: 20
            }}
            color="#ffffff"
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
    borderColor: "#CAD2DE",
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  },
  formLabel: {
    color: "#536171",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "lato-bold"
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  },
  signUpForm: {
    flex: 4,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  }
});
