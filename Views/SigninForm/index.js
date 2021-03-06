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
import Icon from "react-native-vector-icons/FontAwesome";

export default class SigninForm extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="envelope" color="#536171" size={20} /> Email
          </Text>
          <TextInput
            style={styles.inputText}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>
            <Icon name="lock" color="#536171" size={20} /> Password
          </Text>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            // keyboardType="numeric"
            // onChangeText={ftWorkingWeek => this.setState({ ftWorkingWeek })}
            // value={this.state.ftWorkingWeek}
            placeholder="Enter your password"
          />
        </View>
        <View style={styles.formGroup}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Guide");
            }}
            title="Sign In"
            icon={<Icon name="arrow-right" color="white" size={18} />}
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
    fontWeight: "bold",
    fontFamily: "lato-bold"
  },
  formGroup: {
    marginTop: 10,
    marginBottom: 10
  }
});
