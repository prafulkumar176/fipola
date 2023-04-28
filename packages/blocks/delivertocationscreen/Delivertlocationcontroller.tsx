import {Component} from 'react';
import {EmitterSubscription, Keyboard} from 'react-native';
// import {
//   GoogleSignin,
//   // statusCodes,
// } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IState {
  mobileNumber: String;
  code: number;
  enterCode: number;
}
interface IProps {
  navigation: any;
  phoneNumber: any;
}
export default class Delivertlocationcontroller extends Component<
  IProps,
  IState
> {
  keyboardDidShowSubscription?: EmitterSubscription;
  keyboardDidHideSubscription?: EmitterSubscription;
  state: IState = {
    mobileNumber: '',
    code: 4567,
    enterCode: 0,
  };

  componentDidMount() {
    // GoogleSignin.configure();
    this.getData();
  }

  // SignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signOut();
  //     console.log('reached google sign in');
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo);
  //     // this.setState({userInfo});
  //   } catch (error: any) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('error occured SIGN_IN_CANCELLED');
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('error occured IN_PROGRESS');
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('error occured PLAY_SERVICES_NOT_AVAILABLE');
  //     } else {
  //       console.log(error);
  //       console.log('error occured unknow error');
  //     }
  //   }
  // };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('MobileNumber');
      let PhoneNumber = JSON.parse(value).phoneNumber;
      console.log(PhoneNumber, 'mera numnber');

      if (value !== null) {
        this.setState({mobileNumber: PhoneNumber});
      }
    } catch (e) {
      // error reading value
      console.log(e, 'Error');
    }
  };
  handleHomePageLogin = () => {
    if (this.state.code === this.state.enterCode) {
      this.setState({isLogin: false});
      this.props.navigation.navigate('DrawerNavigation');
    } else {
      console.log('Invaild code');
    }
  };
}
