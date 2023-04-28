/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProfileControllers from './ProfileControllers';
import {styles} from './ProfileStyles';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {AppDispatch} from '../../redux/store/Store';
import {NEW_ADDRESS} from '../../redux/action/ActionName';

// FontAwesome;

const {height} = Dimensions.get('window');

class Profile extends ProfileControllers {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor: 'white', height: height}}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={{paddingLeft: 5}}
                onPress={() =>
                  this.props.navigation.navigate('Home', {
                    ImageUrl: this.state.ProfilePicUrl,
                  })
                }>
                <Feather size={25} color={'black'} name="arrow-left" />
              </TouchableOpacity>
              <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.outerContainer}>
              <View style={styles.innerContainer}>
                <Image
                  source={{
                    uri: this.state.ProfilePicUrl
                      ? this.state.ProfilePicUrl
                      : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
                  }}
                  style={styles.profilePic}
                />
              </View>
              <View style={styles.roundMusicApp}>
                <TouchableOpacity
                  style={styles.headsetIcon}
                  onPress={() => this.handleModalImagePicker()}>
                  <Octicons size={25} name="pencil" color={'white'} />
                </TouchableOpacity>
              </View>
            </View>

            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
              }}
              onSubmit={values => this.props.newaddress(values)}
              validationSchema={yup.object().shape({
                firstname: yup.string().min(0),
                lastname: yup.string().min(0),
                phone: yup.number().min(0),
                email: yup.string().email().min(0),
              })}>
              {({
                values,
                handleChange,
                errors,
                isValid,
                setFieldTouched,
                touched,
                handleSubmit,
                resetForm,
              }) => (
                <View style={{marginTop: 70}}>
                  <CustomInput
                    placeholder="Rajesh"
                    style={styles.textInput}
                    handleInputText={handleChange('firstname')}
                  />
                  <Text
                    style={[styles.textInputLabel, {top: 15, paddingRight: 5}]}>
                    First name
                  </Text>
                  {touched.firstname && errors.firstname && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FF0D10',
                        marginLeft: 50,
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: -15,
                      }}>
                      {errors.firstname}
                    </Text>
                  )}

                  <CustomInput
                    placeholder="Singh"
                    style={styles.textInput}
                    handleInputText={handleChange('lastname')}
                  />

                  <Text
                    style={[
                      styles.textInputLabel,
                      {top: 100, paddingRight: 5},
                    ]}>
                    Last name
                  </Text>
                  {touched.lastname && errors.lastname && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FF0D10',
                        marginLeft: 50,
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: -15,
                      }}>
                      {errors.lastname}
                    </Text>
                  )}
                  <CustomInput
                    placeholder="987654321"
                    style={styles.textInput}
                    maxLength={10}
                    keyboardType={'numeric'}
                    handleInputText={handleChange('phone')}
                  />
                  <Text
                    style={[
                      styles.textInputLabel,
                      {top: 185, paddingRight: 5},
                    ]}>
                    Phone
                  </Text>

                  {touched.phone && errors.phone && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FF0D10',
                        marginLeft: 50,
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: -15,
                      }}>
                      {errors.phone}
                    </Text>
                  )}
                  <CustomInput
                    handleInputText={handleChange('email')}
                    placeholder="rajessingh@gmail.com"
                    style={styles.textInput}
                  />
                  <Text
                    style={[
                      styles.textInputLabel,
                      {top: 270, paddingRight: 5},
                    ]}>
                    email
                  </Text>

                  {touched.email && errors.email && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#FF0D10',
                        marginLeft: 50,
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: -15,
                      }}>
                      {errors.email}
                    </Text>
                  )}

                  <CustomButton
                    text="Edit Profile"
                    handleOnpress={() => {
                      handleSubmit();
                      this.props.navigation.navigate('Home');
                    }}
                  />
                </View>
              )}
            </Formik>

            {/* Modal for the profilePic change */}

            <Modal visible={this.state.modalVisible} transparent={false}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    position: 'absolute',
                    color: 'black',
                    fontSize: 18,
                    padding: 20,
                  }}>
                  Profile Photo
                </Text>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                  }}
                  onPress={() => this.handleCloseModal()}>
                  <Entypo size={28} color={'black'} name="cross" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <View style={styles.roundMusicApp2}>
                    <TouchableOpacity
                      style={styles.headsetIcon2}
                      onPress={() => this.handleImagePicker()}>
                      <Entypo size={28} name="camera" color={'#FFFFFF'} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.roundMusicApp2}>
                    <TouchableOpacity
                      style={styles.headsetIcon2}
                      onPress={() => this.handleImagePicker2()}>
                      <FontAwesome size={28} name="photo" color={'#FFFFFF'} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.roundMusicApp2}>
                    <TouchableOpacity
                      style={styles.headsetIcon2}
                      onPress={() => this.handleImagePicker()}>
                      <MaterialCommunityIcons
                        size={28}
                        name="account-cowboy-hat"
                        color={'#FFFFFF'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state.Addnewaddress, 'sdfgfdh');

  return {};
};
const mapDisptachToProps = (dispatch: AppDispatch) => ({
  newaddress: (payload: {}) => dispatch({type: NEW_ADDRESS, payload: payload}),
});

export default connect(mapStateToProps, mapDisptachToProps)(Profile);
