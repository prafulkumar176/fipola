import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
  text: string;
  handleOnpress: any;
}
export default class CustomButton extends Component<IProps> {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.props.handleOnpress}>
          <Text style={styles.btnText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 320,
    height: 70,
    borderRadius: 60,
    alignItems: 'center',
    backgroundColor: '#F62B2A',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 18,
    color: '#FFFFFF',
  },
});
