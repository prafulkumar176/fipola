import React, {Component} from 'react';

interface IProps {
  navigation: any;
}
export default class SplashScreenController extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
}
