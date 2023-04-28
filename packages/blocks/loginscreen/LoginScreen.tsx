/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './LoginStyles';
import CustomInput from '../../components/CustomInput';
import LoginScreenController from './LoginScreenController';
import CustomButton from '../../components/CustomButton';
import {data} from './config';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';

export default class Login extends LoginScreenController {
  phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  render() {
    function setErrorMessage(message: any) {
      throw new Error('Function not implemented.');
    }

    // console.log(this.state.items);
    return (
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.roundedColor}>
              <Image
                source={data[this.state.count].img}
                style={styles.deliveryBoy}
              />
            </View>
            <Text style={styles.timeText}>{data[this.state.count].name}</Text>
            <Text style={styles.descriptionText}>
              {data[this.state.count].info}
            </Text>
            <View style={styles.threedotsContainer}>
              <View
                style={[
                  styles.threedots,
                  {
                    backgroundColor:
                      this.state.count === 0 ? '#F5C559' : '#DCDCDD',
                  },
                ]}
              />
              <View
                style={[
                  styles.threedots,
                  {
                    backgroundColor:
                      this.state.count === 1 ? '#F5C559' : '#DCDCDD',
                  },
                ]}
              />
              <View
                style={[
                  styles.threedots,
                  {
                    backgroundColor:
                      this.state.count === 2 ? '#F5C559' : '#DCDCDD',
                  },
                ]}
              />
            </View>
          </View>
          {/* #DCDCDD */}
          {/* '#F5C559' */}
          <View style={styles.bottomContainer}>
            <Text style={styles.loginText}>Login & Register</Text>
            <Text style={styles.mobileIcon}>
              <FontAwesome name="phone" size={22} color="#BAB9BB" />
            </Text>

            <Formik
              initialValues={{
                phoneNumber: '',
              }}
              onSubmit={values => this.handleSaveNumber(values)}
              validationSchema={yup.object().shape({
                phoneNumber: yup
                  .string()
                  .required('This is a required field')
                  .matches(this.phoneRegExp, 'Phone number is not valid')
                  .min(10, 'too short')
                  .max(10, 'too long'),
                // .string()
                // .matches(this.phoneRegExp, 'Phone number is not valid')
                // .required('A phone number is required'),
              })}>
              {({
                values,
                handleChange,
                errors,
                isValid,
                setFieldTouched,
                touched,
                handleSubmit,
              }) => (
                <View>
                  <CustomInput
                    handleInputText={handleChange('phoneNumber')}
                    placeholder="Mobile No"
                    keyboardType="numeric"
                    maxLength={10}
                    value={undefined} // value={undefined}
                    style={styles.inputText}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FF0D10',
                        marginLeft: 50,
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: -15,
                      }}>
                      {errors.phoneNumber}
                    </Text>
                  )}
                  <CustomButton
                    text="Continue"
                    disabled={!isValid}
                    handleOnpress={() => {
                      if (errors.phoneNumber) {
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FF0D10',
                            marginLeft: 50,
                            fontWeight: 'bold',
                            marginTop: 5,
                            marginBottom: -15,
                          }}>
                          {this.props.navigation.navigate('Login')}
                          {errors.phoneNumber}
                        </Text>;
                      } else {
                        handleSubmit();
                        this.props.navigation.navigate('Delivertocationscreen');
                      }
                    }}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    );
  }
}
