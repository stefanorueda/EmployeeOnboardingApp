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
import { StackNavigator } from "react-navigation";

export default class BusinessForm extends React.Component {
  static navigationOptions = {
    title: "Business Details",
    headerTitleStyle: {
      fontFamily: "lato-bold",
      fontSize: 22
    }
  };

  render() {
    return (
      <View style={styles.signUpForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Mobile Number</Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="0905 1234567"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            What is the name of your business?
          </Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Enter the name of your business"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>How many staff do you have?</Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Enter the number of your staff"
          />
        </View>
        <View style={styles.formGroup}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Guide");
            }}
            title="Continue"
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