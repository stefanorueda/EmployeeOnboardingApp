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
import { Font } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigator } from "react-navigation";
import BusinessForm from "../BusinessForm";

export default class EmployeeOnboarding extends React.Component {
  static navigationOptions = {
    title: "Employee Onboarding",
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#3fafd7"
    },
    headerTitleStyle: {
      fontFamily: "lato-bold",
      fontSize: 22,
      color: "black"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardSuccess}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>Stefano Rueda</Text>
            <Text style={styles.labelDesc}>
              <Icon name="check" size={20} color="#99CA2F" /> Invitation Sent
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="times" size={20} color="#D63C3A" /> Payroll Push
              Status
            </Text>
          </View>
          <View style={styles.cardCol2}>
            <Button
              // onPress={() => {
              //   this.props.navigation.navigate("Guide");
              // }}
              title="Complete"
              buttonStyle={styles.buttonSuccess}
              color="#ffffff"
            />
          </View>
        </View>
        <View style={styles.cardDanger}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>Joel Jensen</Text>
            <Text style={styles.labelDesc}>
              <Icon name="check" size={20} color="#99CA2F" /> Invitation Sent
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="times" size={20} color="#D63C3A" /> Payroll Push
              Status
            </Text>
          </View>
          <View style={styles.cardCol2}>
            <Button
              // onPress={() => {
              //   this.props.navigation.navigate("Guide");
              // }}
              title="Incomplete"
              buttonStyle={styles.buttonDanger}
              color="#ffffff"
            />
          </View>
        </View>
        <View style={styles.cardSuccess}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>Josh Cameron</Text>
            <Text style={styles.labelDesc}>
              <Icon name="check" size={20} color="#99CA2F" /> Invitation Sent
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="times" size={20} color="#D63C3A" /> Payroll Push
              Status
            </Text>
          </View>
          <View style={styles.cardCol2}>
            <Button
              // onPress={() => {
              //   this.props.navigation.navigate("Guide");
              // }}
              title="Complete"
              buttonStyle={styles.buttonSuccess}
              color="#ffffff"
            />
          </View>
        </View>
        <View style={styles.cardSuccess}>
          <View style={styles.cardCol1}>
            <Text style={styles.labelName}>Bryce Davies</Text>
            <Text style={styles.labelDesc}>
              <Icon name="check" size={20} color="#99CA2F" /> Invitation Sent
            </Text>
            <Text style={styles.labelDesc}>
              <Icon name="times" size={20} color="#D63C3A" /> Payroll Push
              Status
            </Text>
          </View>
          <View style={styles.cardCol2}>
            <Button
              // onPress={() => {
              //   this.props.navigation.navigate("Guide");
              // }}
              title="Complete"
              buttonStyle={styles.buttonSuccess}
              color="#ffffff"
            />
          </View>
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
  cardSuccess: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 10,
    marginBottom: 15,
    borderLeftWidth: 10,
    borderLeftColor: "#99CA2F"
  },
  cardDanger: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 10,
    marginBottom: 15,
    borderLeftWidth: 10,
    borderLeftColor: "#D63C3A"
  },
  cardCol1: {
    flexDirection: "column",
    flex: 60
  },
  cardCol2: {
    flexDirection: "column",
    flex: 40
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  labelName: {
    fontSize: 24,
    color: "#536171",
    fontFamily: "lato-bold"
  },
  labelDesc: {
    fontSize: 16,
    color: "#708093",
    fontFamily: "lato-regular"
  },
  buttonDanger: {
    backgroundColor: "#D63C3A",
    width: "100%",
    height: 35,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    padding: 5
  },
  buttonSuccess: {
    backgroundColor: "#99CA2F",
    width: "100%",
    height: 35,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 20,
    padding: 3
  }
});
