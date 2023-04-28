/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './OrderHistoryStyles';
// import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export default class OrderHistory extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.topBarContainer}>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 1, top: 20, left: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Feather size={25} color={'black'} name="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.headingText}>Cart</Text>
        </View>
        <View style={{backgroundColor: '#C4C4C4'}}>
          <View style={styles.maincontainer}>
            <Text style={styles.daytext}> Sunday, 3 April </Text>
            <View style={styles.cartContainer}>
              <Text style={styles.ordertextid}>Order# ORD00003</Text>
              <View style={styles.cardbottomcontainer}>
                <View>
                  <Text style={styles.pricetext2}>$389.00</Text>
                  <View style={styles.timecontainer}>
                    <MaterialCommunityIcons
                      size={23}
                      color={'#A2A3A5'}
                      name="clock-time-five"
                    />
                    <Text style={styles.timetext}>10:32 AM</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <View style={[styles.imagecontainer, {right: 70}]}>
                    <Image
                      source={{
                        uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
                      }}
                      style={styles.rightimage}
                    />
                  </View>
                  <View style={[styles.imagecontainer, {right: 35}]}>
                    <Image
                      source={{
                        uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
                      }}
                      style={styles.rightimage}
                    />
                  </View>
                  <View style={[styles.imagecontainer, {right: 0}]}>
                    <Image
                      source={{
                        uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
                      }}
                      style={styles.rightimage}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cartContainer}>
              <Text style={styles.ordertextid}>Order# ORD00003</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.pricetext2}>$389.00</Text>
                  <View style={styles.cardbottomcontainer}>
                    <MaterialCommunityIcons
                      size={23}
                      color={'#A2A3A5'}
                      name="clock-time-five"
                    />
                    <Text style={styles.timetext}>10:32 AM</Text>
                  </View>
                </View>
                <View>
                  <View style={[styles.imagecontainer, {right: 70}]}>
                    <Image
                      source={{
                        uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
                      }}
                      style={styles.rightimage}
                    />
                  </View>
                  <View style={[styles.imagecontainer, {right: 35}]}>
                    <Image
                      source={{
                        uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
                      }}
                      style={styles.rightimage}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
