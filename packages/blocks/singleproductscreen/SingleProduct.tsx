import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Styles} from './SingleProductStyles';

export default class SingleProduct extends Component {
  render() {
    // console.log(this.props.route.params.item);
    const items = this.props.route?.params?.items;
    const items2 = this.props.route?.params?.productData;

    console.log(items, 'item');
    console.log(items2, 'item2');

    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <Image
          resizeMode="contain"
          source={{uri: items.img}}
          style={Styles.image}
        />
        <View style={Styles.container}>
          <Text style={Styles.titleText}>{items.title}</Text>
          <View style={Styles.container2}>
            <Text style={Styles.offerPrice}>₹{items.offPrice}</Text>
            <Text style={Styles.actualPrice}>{items.actualPrice}</Text>
          </View>
          <Text style={Styles.discriptionText}>
            High in quality protein and Vitamins nutritious pack to improve your
            {'\n'}
            health
          </Text>
          <View style={{margin: 20}}>
            <View style={Styles.container3}>
              <Text style={Styles.peices}>Pieces</Text>
              <Text style={Styles.peicesQty}>12</Text>
            </View>
            <View style={Styles.container4}>
              <Text style={Styles.packs}>Packs</Text>
              <Text style={Styles.packsQty}>2 Packs</Text>
            </View>
          </View>
          <View style={Styles.container5}>
            <TouchableOpacity style={Styles.decrement}>
              <AntDesign
                name="minus"
                color="white"
                size={23}
                style={{paddingTop: 15}}
              />
            </TouchableOpacity>
            <Text style={Styles.quantity}>
              {items2.length === 0
                ? 0
                : items2?.find((v: any) => v.id === items.id).quantity}
            </Text>
            <TouchableOpacity style={Styles.increment}>
              <Text style={Styles.incrementText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
