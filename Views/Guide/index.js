import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import { Button } from "react-native-elements";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    // height: "100%",
    // width: window.width
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fafd7"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fafd7"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fafd7"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25
  }
});

export default class Guide extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          containerStyle={{ alignSelf: "stretch" }}
        >
          <View style={styles.slide1}>
            <Image
              source={require("../../img/how-it-works-01.png")}
              style={{ width: 300, height: 230 }}
            />
            ;<Text style={styles.text}>Send invitations to staff</Text>
          </View>
          <View style={styles.slide2}>
            <Image
              source={require("../../img/how-it-works-02.png")}
              style={{ width: 300, height: 230 }}
            />
            ;<Text style={styles.text}>Staff completes app</Text>
          </View>
          <View style={styles.slide3}>
            <Image
              source={require("../../img/how-it-works-03.png")}
              style={{ width: 300, height: 230 }}
            />
            ;<Text style={styles.text}>Let Tanda do the rest</Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
              title="Start now"
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
        </Swiper>
      </View>
    );
  }
}
