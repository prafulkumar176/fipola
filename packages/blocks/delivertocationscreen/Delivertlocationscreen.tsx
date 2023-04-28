/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './DelivertlocationStyles';
import CustomButton from '../../components/CustomButton';
import Delivertlocationcontroller from './Delivertlocationcontroller';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

export default class Delivertocationscreen extends Delivertlocationcontroller {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/email.png')}
          style={styles.emailImage}
        />
        <Text style={styles.otpText}>OTP Verification</Text>

        <View style={styles.previousNum}>
          <Text style={styles.sendOptText}>Enter The OTP Sent To</Text>
          <Text style={styles.numberText}>+91 {this.state.mobileNumber}</Text>
        </View>

        <View style={styles.roundContainer}>
          <OTPInputView
            style={styles.OtpInputView}
            pinCount={4}
            // code="5055"
            //code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              this.setState({code});
            }}
            codeInputFieldStyle={styles.roundInputs}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            autoFocusOnLoad={false}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              this.setState({enterCode: code});
            }}
          />
        </View>
        {/* <GoogleSigninButton
          style={{width: '100%', height: 60}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.SignIn}
          // disabled={this.state.isSigninInProgress}
        /> */}
        <View>
          <View style={styles.notReceivedOtpConatiner}>
            <Text style={styles.notReceivedOtpText}>Don't Receive OTP </Text>
            <TouchableOpacity>
              <Text style={styles.responseText}>Response</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            text="Submit"
            handleOnpress={() => this.handleHomePageLogin()}
          />
        </View>
      </View>
    );
  }
}
