/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './CardStyles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{paddingLeft: 5}}
            onPress={() => this.props.navigation.goBack()}>
            <Feather size={25} color={'black'} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.profileText}>Card</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.bottomContainer}>
            <CustomInput
              placeholder="XXXX XXXX XXXX"
              style={styles.textInput}
            />
            <Text style={[styles.textInputLabel, {top: 30, paddingRight: 5}]}>
              Card no
            </Text>
            <CustomInput placeholder="05/12/2025" style={styles.textInput} />
            {/* textInputLabel */}
            <Text style={[styles.textInputLabel, {top: 115, paddingRight: 5}]}>
              Expire
            </Text>
            <CustomInput
              placeholder="DD/MM/YY"
              style={styles.textInput}
              maxLength={6}
            />
            <Text style={[styles.textInputLabel, {top: 200, paddingRight: 5}]}>
              CVC
            </Text>
            <CustomInput
              placeholder="Rajesh Singh"
              style={styles.textInput}
              maxLength={6}
            />
            <Text style={[styles.textInputLabel, {top: 285, paddingRight: 5}]}>
              Holder name
            </Text>
          </View>
          <View style={styles.addCardBtn}>
            <CustomButton text="Pay Now" />
          </View>
        </View>
      </View>
    );
  }
}
