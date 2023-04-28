import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

interface IProps {
  Placeholder: string;
  handleInputText: any;
  value: any;
  keyboardType: any;
  navigation: any;
}

interface IState {
  count: number;
  confirm: null;
  code2: string;
}

export default class LoginScreenController extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  state: IState = {
    count: 0,
    confirm: null,
    code2: '',
  };
  signInWithPhoneNumber = async (phoneNumber: any) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    this.setState({confirm: confirmation});
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.count < 2) {
        this.setState({count: this.state.count + 1});
      } else {
        this.setState({count: 0});
      }
    }, 2000);
  }

  handleSaveNumber = async (values: any) => {
    try {
      const number = JSON.stringify(values);
      this.signInWithPhoneNumber(values);
      await AsyncStorage.setItem('MobileNumber', number);
    } catch (e) {
      console.log(e, 'EROROR');
    }
  };
}
