import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Views/Home';
import SignupForm from './Views/SignupForm';
import SigninForm from './Views/SigninForm';
import BusinessForm from './Views/BusinessForm';
import RoleForm from './Views/RoleForm';
import Guide from './Views/Guide';
import Main from './Views/Main';
import { Font } from 'expo';
import EmployeeOnboarding from './Views/EmployeeOnboarding';
import Account from './Views/Account';
import AddEmployee from './Views/AddEmployee';
import TandaAccount from './Views/TandaAccount';
import NameEmailForm from './Views/NameEmailForm';
import StaffForm from './Views/StaffForm';
import SecurityForm from './Views/SecurityForm';
import FirstOnboard from './Views/FirstOnboard';
import CheckEmail from './Views/CheckEmail';
import Integrations from './Views/Integrations';

const RootStack = createStackNavigator(
  {
    Main: { screen: Main },
    NameEmailForm: { screen: NameEmailForm },
    BusinessForm: { screen: BusinessForm },
    StaffForm: { screen: StaffForm },
    Guide: { screen: Guide },
    Home: { screen: Home },
    SecurityForm: { screen: SecurityForm },

    FirstOnboard: { screen: FirstOnboard },
    EmployeeOnboarding: { screen: EmployeeOnboarding },
    Integrations: { screen: Integrations },
    SecurityForm: { screen: SecurityForm },
    CheckEmail: { screen: CheckEmail },

    TandaAccount: { screen: TandaAccount },
    RoleForm: { screen: RoleForm },
    AddEmployee: { screen: AddEmployee },
    SignupForm: { screen: SignupForm },
    SigninForm: { screen: SigninForm },

    Account: { screen: Account }
  },
  { headerMode: 'screen' }
);

export default class App extends React.Component {
  constructor() {
    super();

    Font.loadAsync({
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
    });
  }
  render() {
    return <RootStack />;
  }
}
