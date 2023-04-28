import {Text, View} from 'react-native';
import React, {Component} from 'react';
interface State {
  isCelebration: boolean;
}
interface IProps {
  navigation: {navigate: (args0: string) => void};
}
export default class OrderController extends Component<IProps> {
  state: State = {
    isCelebration: true,
  };
  render() {
    return (
      <View>
        <Text>OrderController</Text>
      </View>
    );
  }
}
