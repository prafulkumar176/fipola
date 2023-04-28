/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './CartStyles';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton';
import {connect} from 'react-redux';
import CartControllers from './CartControllers';
import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  DELETE_CATEGORY_ITEM,
  DELETE_ITEM_FROM_CART,
  INCREMENT_QUANTITY,
} from '../../redux/action/ActionName';

class Cart extends CartControllers {
  render() {
    let totalPrice = 0;
    let totalPrice1 = this.props.productData.productData.map((v: any) => {
      let x = +v.actualPrice.slice(1) * +v.quantity;
      return x;
    });
    // console.log(totalPrice1);

    for (let i = 0; i < totalPrice1.length; i++) {
      totalPrice += totalPrice1[i];
    }

    let totalPrice2 = this.props.categoryData.map((v: any) => {
      let x = +v.actualPrice.slice(1) * +v.quantity;
      return x;
    });
    for (let i = 0; i < totalPrice2.length; i++) {
      totalPrice += totalPrice2[i];
    }

    console.log(totalPrice);

    return (
      <SafeAreaView>
        <View style={styles.topBarContainer}>
          <Text style={styles.headingText}>Cart</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={{marginBottom: 470}}>
            <FlatList
              data={this.props.productData.productData.concat(
                this.props.categoryData,
              )}
              renderItem={({item}) => {
                return (
                  <View style={styles.cartContainer}>
                    <Image
                      source={{
                        uri: item.img,
                      }}
                      style={styles.productImage}
                    />
                    <View>
                      <Text style={styles.productTitle} numberOfLines={1}>
                        {item.title}
                      </Text>
                      <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{item.actualPrice}</Text>
                        <Text style={styles.offText}>{item.offPrice}</Text>
                      </View>
                      <View style={styles.counterContainer}>
                        <TouchableOpacity>
                          <Text style={styles.decrementText}>
                            <Octicons name="dash" size={15} color="white" />
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.counterText}>{item.quantity}</Text>
                        <TouchableOpacity>
                          <Text
                            style={styles.decrementText}
                            onPress={() => {
                              const dta =
                                this.props.productData?.productData?.find(
                                  (ele: any) => {
                                    return ele.id === item.id;
                                  },
                                );
                              const Obj = {
                                id: item.id,
                                title: item.title,
                                quantity: item.quantity,
                                actualPrice: item.actualPrice,
                                offPrice: item.offPrice,
                                img: item.img,
                                isCategoryProductPresent: true,
                              };
                              if (dta === undefined) {
                                this.props.addtocart(Obj);
                                this.props.IncrementQuantity(item.id);
                              } else {
                                this.props.IncrementQuantity(item.id);
                              }
                            }}>
                            <Octicons name="plus" size={15} color="white" />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={{position: 'absolute', top: 72, right: -10}}
                        onPress={() =>
                          item.isCategoryProductPresent
                            ? this.props.removeitemCategory(item.title)
                            : this.props.removeItem(item.id)
                        }>
                        <MaterialCommunityIcons
                          name="delete"
                          size={25}
                          color="red"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        {this.props.productData.productData || this.props.categoryData ? (
          <View style={styles.bottomPriceContainer}>
            <View style={styles.totalPrice}>
              <Text style={styles.titlePriceText}>Subtotal</Text>
              {this.props.productData.productData ? (
                <Text style={styles.priceTextofcart}>
                  ${totalPrice}
                  .00
                </Text>
              ) : (
                <Text>0</Text>
              )}
            </View>
            <Text style={styles.bottomline} />

            <View style={styles.totalPrice}>
              <Text style={styles.titlePriceText}>Delivery Charge</Text>
              <Text style={styles.priceTextofcart}>$50</Text>
            </View>
            <Text style={styles.bottomline} />

            <View style={styles.totalPrice}>
              <Text style={styles.titlePriceText}>Subtotal</Text>
              {this.props.productData.productData ? (
                <Text style={styles.priceText2}>
                  ${totalPrice}
                  .00
                </Text>
              ) : (
                <Text>0</Text>
              )}
            </View>
            <View style={{marginTop: 20}}>
              <CustomButton
                text="Check Out"
                handleOnpress={() => {
                  this.props.navigation.navigate('Address', {
                    totalPrice: totalPrice,
                    cartdata: this.props.productData.productData.concat(
                      this.props.categoryData,
                    ),
                  });
                }}
              />
            </View>
          </View>
        ) : (
          ''
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  let productData = state.AddtoCartReducer;

  // console.log(JSON.stringify(productData), 'data form list');

  return {
    productData: productData,
    categoryData: state.CategoryAddToCart.categoryData,
  };
};
export const mapDisptachToProps = (disptach: any) => ({
  IncrementQuantity: (id: number) =>
    disptach({type: INCREMENT_QUANTITY, payload: id}),
  removeItem: (id: number) =>
    disptach({type: DELETE_ITEM_FROM_CART, payload: id}),
  addtocart: (payload: any) => disptach({type: ADD_TO_CART, payload: payload}),
  decrementqantity: (id: number) =>
    disptach({type: DECREMENT_QUANTITY, payload: id}),
  removeitemCategory: (id: number) =>
    disptach({type: DELETE_CATEGORY_ITEM, payload: id}),
});

export default connect(mapStateToProps, mapDisptachToProps)(Cart);
