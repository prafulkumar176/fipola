/* eslint-disable eslint-comments/no-unused-disable */
import React, {Component} from 'react';
import {Pagination} from 'react-native-snap-carousel';
import {entries} from './config';
import {styles} from './Homescreenstyles';
import {Alert, BackHandler, NativeEventSubscription} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  navigation: any;
  myRef: any;
  activeSlide: any;
  modalVisible: boolean;
  pinCodeVal: string;
  ProfilePicUrl: string;
  decrementQantity: () => {};
  productData: any[];
  deliveryPincode: () => {};
  isModelVisible: boolean;
}
export default class HomescreenController extends Component<IProps> {
  carouselRef: React.RefObject<unknown>;
  // carouselRef: React.RefObject<unknown>;
  // addingRefInput: any;
  // activeSlide: any;
  constructor(props: IProps) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      activeSlide: 0,
      modalVisible: false,
      pinCodeVal: '',
      ProfileUrl: '',
      isModelVisible: false,
    };
  }

  get pagination() {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={this.state.activeSlide}
        containerStyle={{position: 'absolute'}}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  handlePosition = v => {
    this.setState({activeSlide: v});
  };

  handleCloseModal = () => {
    this.setState({modalVisible: false});
  };
  handlePincodeText = (e: any) => {
    this.setState({pinCodeVal: e});
  };

  backHandler?: NativeEventSubscription;

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('ProfileUrl');
      if (value !== null) {
        // console.log(JSON.stringify(value));
        let ImageUri = JSON.stringify(value);
        this.setState({ProfileUrl: ImageUri});
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    // ProfileUrl
  }

  componentWillUnmount() {
    this.backHandler?.remove();
  }
}
