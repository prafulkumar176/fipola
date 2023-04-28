import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Homescreen from '../blocks/homescreen/Homescreen';
import Categoryscreen from '../blocks/categoryscreen/Categoryscreen';
import Cart from '../blocks/cartscreen/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Homescreen from '../blocks/homescreen/Homescreen';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();
class TabNavigation extends Component<any, any> {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              if (focused) {
                return <Foundation name="home" size={25} color={'white'} />;
              } else {
                return <Feather name="home" size={25} color={'white'} />;
              }
            } else if (route.name === 'Category') {
              return focused ? (
                <AntDesign name="appstore1" size={25} color={'white'} />
              ) : (
                <AntDesign name="appstore-o" size={25} color={'white'} />
              );
            } else if (route.name === 'Cart') {
              return focused ? (
                <Entypo name="shopping-cart" size={25} color={'white'} />
              ) : (
                <AntDesign name="shoppingcart" size={25} color={'white'} />
              );
            }
          },
          // Feather
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#F5BF45',
          },
          tabBarLabel: () => {
            return null;
          },
        })}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Category" component={Categoryscreen} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarBadge:
              this.props?.productData?.length === 0 &&
              this.props.categoryData.length === 0
                ? 0
                : this.props?.productData?.length +
                  this.props.categoryData.length,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state: any) => ({
  productData: state.AddtoCartReducer.productData,
  categoryData: state.CategoryAddToCart.categoryData,
});

export default connect(mapStateToProps)(TabNavigation);
