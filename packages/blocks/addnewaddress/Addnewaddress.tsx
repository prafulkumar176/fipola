/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {styles} from './addnewaddressStyles';
import CustomButton from '../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AppDispatch, RootState} from '../../redux/store/Store';
import {NEW_ADDRESS} from '../../redux/action/ActionName';
import {connect} from 'react-redux';
import AddnewaddressControllers from './addnewaddressControllers';
// import {mapstyles} from './config';

Geocoder.init('AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U', {language: 'en'});

class Addnewaddress extends AddnewaddressControllers {
  handlePress = () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  };
  getLocation = () => {
    const {latitude, longitude} = this.state;
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        {latitude} +
        ',' +
        {longitude} +
        '&key=' +
        'AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U',
    )
      .then(response => response.json())
      .then(responseJson => {
        console.warn(responseJson);
      });
  };

  render() {
    console.log(this.props.route.params?.currentAddress);

    return (
      <ScrollView automaticallyAdjustContentInsets={true}>
        <View style={styles.mainContainer}>
          {/* <View style={styles.container}> */}
          <MapView
            showsUserLocation={true}
            // customMapStyle={mapstyles}
            provider="google"
            style={styles.mapStyles}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={event => {
              this.setState({
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude,
                marker: {
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude,
                },
              });
              Geocoder.from(event.nativeEvent.coordinate)
                .then(json => {
                  const address = json.results[0].address_components[0];
                  console.warn(address.long_name);
                })
                .catch(err => console.log(err));
            }}>
            <Marker
              onDragEnd={e => {
                this.setState({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                  marker: {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  },
                });
                console.log('dragEnd', e.nativeEvent.coordinate.latitude);
              }}
              draggable
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
            />
          </MapView>
          {/* <Button title="currentLocation" onPress={this.handlePress} /> */}
          {/* </View> */}

          <Formik
            initialValues={{
              flatAddress: '',
              cityName: '',
              pincode: '',
              id: Date.now(),
            }}
            onSubmit={values => this.props.newaddress(values)}
            validationSchema={yup.object().shape({
              flatAddress: yup.string(),
              cityName: yup.string(),
              pincode: yup.string().max(6),
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
              <View style={styles.bottomContainer}>
                <CustomInput
                  placeholder="Raj Palace 13"
                  style={styles.textInput}
                  handleInputText={handleChange('flatAddress')}
                  value={
                    this.props.route.params?.currentAddress?.flatAddress
                      ? this.props.route.params?.currentAddress?.flatAddress
                      : values.flatAddress
                  }
                />
                <Text
                  style={[styles.textInputLabel, {top: 30, paddingRight: 5}]}>
                  Flat No, Building name
                </Text>
                {touched.flatAddress && errors.flatAddress && (
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#FF0D10',
                      marginLeft: 50,
                      fontWeight: 'bold',
                      marginTop: 5,
                      marginBottom: -15,
                    }}>
                    {errors.flatAddress}
                  </Text>
                )}
                <CustomInput
                  placeholder="Hyderabad"
                  style={styles.textInput}
                  handleInputText={handleChange('cityName')}
                  value={
                    this.props.route.params?.currentAddress?.cityName
                      ? this.props.route.params?.currentAddress?.cityName
                      : values.cityName
                  }
                />
                <Text
                  style={[styles.textInputLabel, {top: 115, paddingRight: 5}]}>
                  City
                </Text>
                {touched.cityName && errors.cityName && (
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#FF0D10',
                      marginLeft: 50,
                      fontWeight: 'bold',
                      marginTop: 5,
                      marginBottom: -15,
                    }}>
                    {errors.cityName}
                  </Text>
                )}
                <CustomInput
                  placeholder="500049"
                  style={styles.textInput}
                  maxLength={6}
                  keyboardType={'numeric'}
                  handleInputText={handleChange('pincode')}
                  value={
                    this.props.route.params?.currentAddress?.pincode
                      ? this.props.route.params?.currentAddress?.pincode
                      : values.pincode
                  }
                />
                <Text
                  style={[styles.textInputLabel, {top: 200, paddingRight: 5}]}>
                  Pincode
                </Text>
                {touched.pincode && errors.pincode && (
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#FF0D10',
                      marginLeft: 50,
                      fontWeight: 'bold',
                      marginTop: 5,
                      marginBottom: -15,
                    }}>
                    {errors.cityName}
                  </Text>
                )}

                <CustomButton
                  text="Add new"
                  handleOnpress={() => {
                    handleSubmit();
                    this.props.navigation.navigate('Address');
                  }}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDisptachToProps)(Addnewaddress);
