import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import mapstyle from './mapstyle.json';
Geocoder.init('AIzaSyCVa5-vHiqebRa3saaTYMnN436o9W8PP8U', {language: 'en'});
interface Iprops {}
interface IState {
  latitude: Number;
  longitude: Number;
  latitudeDelta: any;
  longitudeDelta: any;
  coordinates: any[];
  marker: Object;
}
class App extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      coordinates: [],
      marker: {
        latitude: 0,
        longitude: 0,
      },
    };
  }
  // componentDidMount() {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         coordinates: this.state.coordinates.concat({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude

  //         })
  //       });
  //     },
  //     error => {
  //       Alert.alert(error.message.toString());
  //     },
  //     {
  //       showLocationDialog: true,
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 0
  //     }
  //   );
  //  }
  //   getLocationName(latitude, longitude){
  //     Geocoder.geocodePosition({lat:latitude, lng:longitude})
  //     .then((response)=>{
  //       const address=response[0].formattedAddress;
  //      console.log(address)
  //     })
  //     .catch((err: any)=>{
  //       console.log(err)
  //     })
  //   }
  //   componentDidMount() {
  // this.getLocationName(33.7749,122.4194)
  //   }

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
  render(): React.ReactNode {
    return (
      <View style={{height: '100%', borderRadius: 20}}>
        <MapView
          showsUserLocation={true}
          customMapStyle={mapstyle}
          provider="google"
          style={{flex: 1}}
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
            }}></Marker>
        </MapView>
        <Button title="currentLocation" onPress={this.handlePress} />

        <Button title="get name" onPress={this.getLocation} />
        <Text
          style={{backgroundColor: '#D8D8D8', borderRadius: 20, fontSize: 20}}>
          {' '}
          Current Latitude :{this.state.latitude}
        </Text>
        <Text
          style={{backgroundColor: '#D8D8D8', borderRadius: 20, fontSize: 20}}>
          {' '}
          Current Longitude :{this.state.longitude}
        </Text>
      </View>
    );
  }
}
export default App;
