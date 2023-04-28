/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderHistory from '../blocks/orderHistory/OrderHistory';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

interface IProps {
  navigation: {navigate: (arg0: string) => void};
}
export default class DrawerNavigation extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  Home = () => {
    return <Text style={{color: '#A9A9A9'}}>About screen</Text>;
  };
  About = () => {
    return <Text style={{color: '#A9A9A9'}}>about screen</Text>;
  };
  faq = () => {
    return <Text style={{color: '#A9A9A9'}}>faq screen</Text>;
  };
  contact = () => {
    return <Text style={{color: '#A9A9A9'}}>contact screen</Text>;
  };
  wheels = () => {
    return <Text style={{color: '#A9A9A9'}}>fipola on wheels screen</Text>;
  };
  history = () => {
    return <Text style={{color: '#A9A9A9'}}>history screen</Text>;
  };
  tc = () => {
    return <Text style={{color: '#A9A9A9'}}>terms and conditions screen</Text>;
  };
  certificates = () => {
    return <Text style={{color: '#A9A9A9'}}>certificates screen</Text>;
  };
  franchise = () => {
    return <Text style={{color: '#A9A9A9'}}>franchise screen</Text>;
  };
  render() {
    return (
      // <Drawer.Navigator screenOptions={{headerShown: false}}>
      //   <Drawer.Screen name="HomeScreen" component={Homescreen} />
      //   <Drawer.Screen name="Category" component={Categoryscreen} />
      //   <Drawer.Screen name="Cart" component={Cart} />
      // </Drawer.Navigator>

      <Drawer.Navigator
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItem
                label={() => (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: '#F5BF45',
                      width: 275,
                      height: 127,
                      paddingVertical: 40,
                      paddingHorizontal: 20,
                      // position: 'absolute',
                    }}>
                    <Image
                      source={require('../blocks/homescreen/assets/logo_png.png')}
                      style={{width: 130, height: 47}}
                    />
                  </View>
                )}
                onPress={() => props.navigation.navigate('Login')}
              />
              <DrawerItemList {...props} />
              <DrawerItem
                label={() => (
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#F5BF45',
                        width: 235,
                        height: 57,
                        borderRadius: 60,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontSize: 18,
                          fontWeight: '600',
                          textAlign: 'center',
                          marginTop: 14,
                        }}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        SignOut
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 13,
                        lineHeight: 28,
                        textTransform: 'capitalize',
                        color: '#A9A9A9',
                        marginTop: 25,
                      }}>
                      App Version 3.4.7
                    </Text>
                  </View>
                )}
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </DrawerContentScrollView>
          );
        }}
        screenOptions={{
          drawerLabelStyle: {
            color: 'black', //to change text color
          },
        }}>
        {/* <Drawer.Screen name="TabNavigation" component={TabNavigation} /> */}
        <Drawer.Screen
          name="Tab"
          component={TabNavigation}
          options={{
            // to add icons in drawer navigation
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={this.About}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="information-circle"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="FAQ'S"
          component={this.faq}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="question-circle"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={this.contact}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="headphones"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="fipola On Wheels"
          component={this.wheels}
          options={{
            drawerIcon: ({focused, size}) => (
              <Feather
                name="truck"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Orderhistory"
          component={OrderHistory}
          options={{
            drawerIcon: ({focused, size}) => (
              <Entypo
                name="back-in-time"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            title: 'Order History',
            headerStyle: {
              backgroundColor: '#F5BF45',
            },
            headerTintColor: '#18161B',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Term & Conditions"
          component={this.tc}
          options={{
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
                name="file-alt"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Certificates"
          component={this.certificates}
          options={{
            drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                name="file-certificate"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="franchise"
          component={this.franchise}
          options={{
            drawerIcon: ({focused, size}) => (
              <Entypo
                name="shop"
                size={size}
                color={focused ? '#F5BF45' : '#ccc'}
              />
            ),
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    );
  }
}
