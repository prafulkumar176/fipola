import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {styles} from './SplashScreenStyles';
import SplashScreenController from './SplashScreenController';

export default class SplashScreen extends SplashScreenController {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/food.png')} style={styles.foodImage} />
        <Image source={require('./assets/logo_png.png')} style={styles.logo} />
        <Image
          source={require('./assets/food2.png')}
          style={styles.foodImage2}
        />
      </View>
    );
  }
}
