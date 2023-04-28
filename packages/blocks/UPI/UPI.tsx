/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {styles} from './UPIStyles';

export default class UPI extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingLeft: 5}}>
            <Feather size={25} color={'black'} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.profileText}>UPI</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.bottomContainer}>
            <CustomInput placeholder="8179466343" style={styles.textInput} />
            <Text style={[styles.textInputLabel, {top: 30, paddingRight: 5}]}>
              UPI
            </Text>
          </View>
          <View style={styles.addCardBtn}>
            <CustomButton text="Pay now" />
          </View>
        </View>
      </View>
    );
  }
}
