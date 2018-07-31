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
import BusinessForm from "../BusinessForm";

export default class SignupForm extends React.Component {
  static navigationOptions = {
    headerTitle: <Text>Next Steps</Text>
  };
  render() {
    return (
      <View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Enter your full name"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="at least 9 characters"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Create your password</Text>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="at least 9 characters"
          />
        </View>

        <View style={styles.formGroup}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("BusinessForm");
            }}
            title="Get Started!"
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
  }
});
