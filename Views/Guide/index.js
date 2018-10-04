import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    // height: "100%",
    // width: window.width
  },
  slide0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fafd7',
    paddingLeft: 20,
    paddingRight: 20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fafd7'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fafd7'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fafd7'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25
  },
  desc: {
    opacity: 0.7,
    fontSize: 22,
    color: '#fff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    textAlign: 'center'
  },
  buttonGreen: {
    backgroundColor: '#93C732',
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    height: 50,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 24,
    marginTop: 60,
    marginBottom: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DAE0E8',
    shadowOpacity: 0,
    fontFamily: 'lato-bold'
  },
  textRedirect: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline'
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
          height: '100%',
          width: '100%'
        }}
      >
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          containerStyle={{ alignSelf: 'stretch' }}
        >
          <View style={styles.slide0}>
            <Image
              source={require('../../img/how-it-works-00.png')}
              style={{ width: 260, height: 200 }}
            />
            ;
            <Text style={styles.text}>
              Eliminate paperwork and repetitive data entry when hiring new
              staff
            </Text>
            <Text style={styles.desc}>
              Invite new staff with a click and let their details come to you
              through Tanda’s employee onboarding.
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
              title="Get started"
              fontSize={22}
              buttonStyle={styles.buttonGreen}
              color="#ffffff"
            />
            <Text
              style={styles.textRedirect}
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
            >
              I already have an account
            </Text>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('../../img/how-it-works-01.png')}
              style={{ width: 260, height: 200 }}
            />
            ;<Text style={styles.text}>Send invitations to staff</Text>
            <Text style={styles.desc}>
              Enter your staff’s email and Tanda will send them the onboarding
              link
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
              title="Get started"
              fontSize={22}
              buttonStyle={styles.buttonGreen}
              color="#ffffff"
            />
            <Text
              style={styles.textRedirect}
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
            >
              I already have an account
            </Text>
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../../img/how-it-works-02.png')}
              style={{ width: 260, height: 200 }}
            />
            ;<Text style={styles.text}>Staff enter details</Text>
            <Text style={styles.desc}>
              Staff enters their information into Tanda. You will receive a
              confirmation when they’re done.
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
              title="Get started"
              fontSize={22}
              buttonStyle={styles.buttonGreen}
              color="#ffffff"
            />
            <Text
              style={styles.textRedirect}
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
            >
              I already have an account
            </Text>
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../img/how-it-works-03.png')}
              style={{ width: 260, height: 200 }}
            />
            ;<Text style={styles.text}>Let Tanda do the rest</Text>
            <Text style={styles.desc}>
              Create timesheets, track attendance, swap shifts, and integrate
              with payroll via Tanda.
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
              title="Get started"
              fontSize={22}
              buttonStyle={styles.buttonGreen}
              color="#ffffff"
            />
            <Text
              style={styles.textRedirect}
              onPress={() => {
                this.props.navigation.navigate('RoleForm');
              }}
            >
              I already have an account
            </Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
