import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Homescreenstyles';
import Octicons from 'react-native-vector-icons/Octicons';
import HomescreenController from '../HomescreenController';
import {connect} from 'react-redux';
// import {addtocart, incrementQantity} from '../../../redux/action/ActionType';
import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from '../../../redux/action/ActionName';
import {AppDispatch, RootState} from '../../../redux/store/Store';

class FlatListCards extends HomescreenController {
  handleDecrement = (id: number) => {
    this.props.decrementqantity(id);
    // console.log(id);
  };
  render() {
    // console.log(this.props.alldata);

    const {id, title, quantity, actualPrice, offPrice, img}: any = this.props;

    return (
      <View style={{marginLeft: 16, marginVertical: 8}}>
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
          <TouchableOpacity onPress={() => this.handleDecrement(id)}>
            <Text style={styles.decrementText}>
              <Octicons name="dash" size={18} color="white" />
            </Text>
          </TouchableOpacity>
          {this.props?.productData?.length > 0 ? (
            <Text style={styles.counterText}>
              {this.props.productData.find((v: any) => v.id === id)?.quantity
                ? this.props.productData.find((v: any) => v.id === id)?.quantity
                : quantity}
            </Text>
          ) : (
            <Text style={styles.counterText}>0</Text>
          )}

          <TouchableOpacity
            onPress={() => {
              const dta = this.props.productData.find((ele: any) => {
                return ele.id === id;
              });
              const Obj = {
                id: id,
                title: title,
                quantity: quantity,
                actualPrice: actualPrice,
                offPrice: offPrice,
                img: img,
              };
              if (dta === undefined) {
                this.props.addtocart(Obj);
                this.props.incrementQantity(id);
              } else {
                this.props.incrementQantity(id);
              }
            }}>
            <Text style={styles.decrementText}>
              <Octicons name="plus" size={18} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   let productData = state.AddtoCartReducer;
//   console.log(JSON.stringify(productData), 'data form list');
//   return {
//     productData: productData,
//   };
// };
const mapStateToProps = (state: RootState) => ({
  productData: state.AddtoCartReducer.productData,
  alldata: state.AddtoCartReducer,
});
const mapDisptachToProps = (disptach: AppDispatch) => ({
  incrementQantity: (id: number) =>
    disptach({type: INCREMENT_QUANTITY, payload: id}),
  addtocart: (payload: any) => disptach({type: ADD_TO_CART, payload: payload}),
  decrementqantity: (id: number) =>
    disptach({type: DECREMENT_QUANTITY, payload: id}),
});

export default connect(mapStateToProps, mapDisptachToProps)(FlatListCards);
