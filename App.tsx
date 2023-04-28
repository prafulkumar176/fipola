/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from './packages/blocks/splashscreen/SplashScreen';
import Login from './packages/blocks/loginscreen/LoginScreen';
import Delivertocationscreen from './packages/blocks/delivertocationscreen/Delivertlocationscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SubCategory from './packages/blocks/categoryscreen/SubCategory';
import Homescreen from './packages/blocks/homescreen/Homescreen';
import SingleProduct from './packages/blocks/singleproductscreen/SingleProduct';
import Profile from './packages/blocks/profilescreen/Profile';
import DrawerNavigation from './packages/routes/DrawerNavigation';
import {Provider} from 'react-redux';
import {Store} from './packages/redux/store/Store';
import Selectaddress from './packages/blocks/selectaddressscreen/Selectaddress';
import Addnewaddress from './packages/blocks/addnewaddress/Addnewaddress';
import PaymentMethod from './packages/blocks/paymentMethod/PaymentMethod';
import Card from './packages/blocks/card/Card';
import UPI from './packages/blocks/UPI/UPI';
import OrderHistory from './packages/blocks/orderHistory/OrderHistory';
import OrderSuccessfull from './packages/blocks/ordersuccess/OrderSuccess';
import MessageScreen from './packages/blocks/messagingScreen/MessageScreen';

// import RazorpayCheckout from 'react-native-razorpay';

interface IProps {
  navigation: any;
}
const Stack = createNativeStackNavigator();
export default class App extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Delivertocationscreen"
              component={Delivertocationscreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeScreen"
              component={Homescreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SubCategory"
              component={SubCategory}
              options={({route}) => ({
                title: route?.params?.title,
                headerStyle: {
                  backgroundColor: '#F5BF45',
                },
                headerTintColor: '#18161B',
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 20,
                },
              })}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NewAddress"
              component={Addnewaddress}
              options={() => ({
                title: 'Add New Address',
                headerStyle: {
                  backgroundColor: '#F5BF45',
                },
                headerTintColor: '#18161B',
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 20,
                },
              })}
            />

            <Stack.Screen
              name="Address"
              component={Selectaddress}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={() => ({
                title: 'Payment Method',
                headerStyle: {
                  backgroundColor: '#F5BF45',
                },
                headerTintColor: '#18161B',
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 20,
                },
              })}
            />
            <Stack.Screen
              name="Card"
              component={Card}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UPI"
              component={UPI}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderHistory"
              component={OrderHistory}
              options={() => ({
                title: 'Order History',
                headerStyle: {
                  backgroundColor: '#F5BF45',
                },
                headerTintColor: '#18161B',
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 20,
                },
              })}
            />
            <Stack.Screen
              name="OrderSuccessfull"
              component={OrderSuccessfull}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Message"
              component={MessageScreen}
              options={{headerShown: false}}
            />
            {/* OrderSuccessfull */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
