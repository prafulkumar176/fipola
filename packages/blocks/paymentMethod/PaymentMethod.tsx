/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PaymentMethodStyles';
import CustomButton from '../../components/CustomButton';

export default class PaymentMethod extends Component {
  render() {
    return (
      <View>
        <View style={styles.cartContainer}>
          <View style={{marginLeft: 8}}>
            {/* <FontAwesome name="dot-circle-o" size={25} color="#F5BF45" /> */}
            <TouchableOpacity style={styles.outerCircle}>
              <TouchableOpacity
                style={[styles.innerCircle, {backgroundColor: '#F5BF45'}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.addressTextContainer}>
            <TouchableOpacity>
              <Text style={styles.nameText}>Debit / Credit / ATM</Text>
            </TouchableOpacity>
            <Image
              source={require('./assets/paymentoptions.png')}
              style={{
                width: 260,
                height: 29,
                marginTop: 15,
                marginLeft: -37,
                // position: 'absolute',
                // top: 40,
                // left: -30,
              }}
            />
          </View>
        </View>
        <View style={styles.cartContainer}>
          <View style={{marginLeft: 8}}>
            {/* <FontAwesome name="dot-circle-o" size={25} color="#F5BF45" /> */}
            <TouchableOpacity style={styles.outerCircle}>
              <TouchableOpacity
                style={[styles.innerCircle, {backgroundColor: '#F5BF45'}]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addressTextContainer}>
            <Text style={styles.nameText}>Net Banking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cartContainer}>
          <View style={{marginLeft: 8}}>
            {/* <FontAwesome name="dot-circle-o" size={25} color="#F5BF45" /> */}
            <TouchableOpacity style={styles.outerCircle}>
              <TouchableOpacity
                style={[styles.innerCircle, {backgroundColor: '#F5BF45'}]}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addressTextContainer}>
            <Text style={styles.nameText}>UPI</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text="Continue"
          handleOnpress={() => this.props.navigation.navigate('Card')}
        />
      </View>
    );
  }
}
