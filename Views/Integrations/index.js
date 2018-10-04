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
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

export default class Integrations extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.rowHeader}>
          <View style={styles.titleContainer} bottom>
            <Text style={styles.title}>Integrations</Text>
          </View>
        </View>
        <View style={styles.rowContent}>
          <View style={styles.row}>
            <View style={styles.col}>
              <View style={styles.card}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={styles.cardDesc}>
                  Automatically lodge your employee's Tax File Numbers with the
                  ATO using Tanda
                </Text>
                <Text style={styles.cardLink}>Learn More</Text>
              </View>
            </View>
            <View style={styles.col}>
              <View style={styles.card}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={styles.cardDesc}>
                  Eliminate double entry with Tanda's payroll & accounting
                  integrations
                </Text>
                <Text style={styles.cardLink}>Learn More</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <View style={styles.card}>
                <Image
                  source={require('../../img/ato-logo.png')}
                  style={{ width: 60, height: 60 }}
                />
                <Text style={styles.cardDesc}>
                  Track Time, schedule and more with Tanda
                </Text>
                <Text style={styles.cardLink}>Learn More</Text>
              </View>
            </View>
          </View>
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
    flex: 3.5,
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
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column',
    width: '50%',
    padding: 20
  },
  card: {
    width: '100%',
    height: 211,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 10,
    backgroundColor: '#ffffff',
    padding: 14,
    textAlign: 'center',
    alignItems: 'center'
  },
  cardDesc: {
    color: '#8A9BAE',
    textAlign: 'center',
    marginTop: 15
  },
  cardLink: {
    color: '#3fafd7',
    textAlign: 'center',
    bottom: 20,
    position: 'absolute'
  }
});
