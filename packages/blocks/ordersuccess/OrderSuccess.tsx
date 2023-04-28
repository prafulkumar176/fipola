import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Style} from './OrderSuccessStyles';
import OrderController from './OrderSuccessControllers';

const {width, height} = Dimensions.get('window');

export default class OrderSuccessfull extends OrderController {
  render() {
    return (
      <View style={{height: height, width: width}}>
        <ImageBackground
          source={require('./assets/ordersuccess.png')}
          style={Style.backgroundimg}>
          <View style={Style.outerView}>
            <View style={Style.innerView}>
              <ConfettiCannon
                count={200}
                origin={{
                  x: height === 592 ? 140 : 150,
                  y: height === 592 ? 160 : 170,
                }}
                fadeOut={true}
              />
              <View style={Style.rightView}>
                <Entypo
                  name="check"
                  size={height === 592 ? 50 : 60}
                  color="white"
                  style={{paddingTop: height === 592 ? 12 : 15}}
                />
              </View>
              <Text style={Style.titleText}>Congratulations!</Text>
              <Text style={Style.ordertext}>Your Order Successfully</Text>
            </View>
            <TouchableOpacity
              style={Style.homeIcon}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Foundation
                name="home"
                size={35}
                color="white"
                style={{paddingTop: 12}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
