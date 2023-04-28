import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface IState {
  ProfilePicUrl: string;
  modalVisible: boolean;
}
interface IProps {
  navigation: any;
  newaddress: (args0: {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
  }) => void;
}
export default class ProfileControllers extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  state: IState = {
    ProfilePicUrl: '',
    modalVisible: false,
  };

  handleCloseModal = () => {
    this.setState({modalVisible: false});
  };
  handleModalImagePicker = () => {
    this.setState({modalVisible: true});
  };
  handleImagePicker = async () => {
    let options: any = {
      mediaType: 'photo',
      maxWidth: 250,
      saveToPhotos: true,
      quality: 1,
      cameraType: 'back',
    };
    // await launchCamera(options, value => {
    //   console.log(value);
    //   this.setState({ProfilePicUrl: value?.assets[0].uri});
    // });
    // this.setState({modalVisible: false});
    try {
      await launchCamera(options, value => {
        // console.log(value);
        this.setState({ProfilePicUrl: value?.assets[0].uri});
      });
      await AsyncStorage.setItem('ProfileUrl', this.state.ProfilePicUrl);

      this.setState({modalVisible: false});
    } catch (e) {
      console.log(e, 'Error');
    }
  };
  handleImagePicker2 = async () => {
    let options: any = {
      mediaType: 'photo',
      maxWidth: 250,
      saveToPhotos: true,
      quality: 1,
      cameraType: 'back',
    };
    try {
      await launchImageLibrary(options, value => {
        console.log(value);
        this.setState({ProfilePicUrl: value?.assets[0].uri});
      });
      await AsyncStorage.setItem('ProfileUrl', this.state.ProfilePicUrl);

      this.setState({modalVisible: false});
    } catch (e) {
      console.log(e, 'Error');
    }
    // await launchImageLibrary(options, value => {
    //   console.log(value);
    //   this.setState({ProfilePicUrl: value?.assets[0].uri});
    // });
  };
}
