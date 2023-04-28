/* eslint-disable react/jsx-no-duplicate-props */
import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface IProps {
  placeholder: string;
  handleInputText: any;
  value: any;
  keyboardType: any;
  maxLength: number;
  style: any;
  onBlur: any;
}

export default class CustomInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.inputFiled}>
        <TextInput
          placeholder={this.props.placeholder}
          onChangeText={e => this.props.handleInputText(e)}
          style={this.props.style}
          value={this.props.value}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          onBlur={this.props.onBlur}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFiled: {
    width: 320,
    height: 60,
    borderRadius: 60,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 25,
  },
  inputText: {
    paddingHorizontal: 60,
    paddingTop: 20,
    color: '#18161B',
    fontSize: 16,
    fontWeight: '500',
    textAlignVertical: 'top',
  },
});
