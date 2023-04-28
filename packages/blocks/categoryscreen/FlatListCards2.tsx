import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import CategoryscreenController from './CategoryscreenController';
import {styles} from './CategoryscreenStyles';
import {connect} from 'react-redux';
import {
  CATEGORY_ADD_TO_CART,
  CATEGORY_DECREMENT_QUANTITY,
  CATEGORY_INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from '../../redux/action/ActionName';
import {AppDispatch, RootState} from '../../redux/store/Store';

class FlatListCards2 extends CategoryscreenController {
  render() {
    console.log(this.props.categoryData);

    const {id, title, quantity, actualPrice, offPrice, img}: any = this.props;

    return (
      <View style={styles.categoryFlatlist}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{actualPrice}</Text>
          <Text style={styles.offText}>{offPrice}</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => this.props.decrementqantity(id)}>
            <Text style={styles.decrementText}>
              <Octicons name="dash" size={18} color="white" />
            </Text>
          </TouchableOpacity>
          {this.props?.categoryData?.length > 0 ? (
            <Text style={styles.counterText}>
              {this.props.categoryData.find((v: any) => v.title === title)
                ?.quantity
                ? this.props.categoryData.find((v: any) => v.title === title)
                    ?.quantity
                : quantity}
            </Text>
          ) : (
            <Text style={styles.counterText}>0</Text>
          )}
          <TouchableOpacity
            style={styles.decrementText}
            onPress={() => {
              const dta = this.props.categoryData.find((ele: any) => {
                return ele.title === title;
              });
              const Obj = {
                id: id,
                title: title,
                quantity: quantity,
                actualPrice: actualPrice,
                offPrice: offPrice,
                img: img,
                isCategoryProductPresent: false,
              };
              if (dta === undefined) {
                this.props.addtocart(Obj);
                this.props.incrementQantity(id);
              } else {
                this.props.incrementQantity(id);
              }
            }}>
            <Octicons name="plus" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  categoryData: state.CategoryAddToCart.categoryData,
});
const mapDisptachToProps = (disptach: AppDispatch) => ({
  incrementQantity: (id: number) =>
    disptach({type: CATEGORY_INCREMENT_QUANTITY, payload: id}),
  addtocart: (payload: any) =>
    disptach({type: CATEGORY_ADD_TO_CART, payload: payload}),
  decrementqantity: (id: number) =>
    disptach({type: CATEGORY_DECREMENT_QUANTITY, payload: id}),
});

export default connect(mapStateToProps, mapDisptachToProps)(FlatListCards2);
