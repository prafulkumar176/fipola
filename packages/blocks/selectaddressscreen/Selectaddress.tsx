/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './SelectaddressStyles';
import Entypo from 'react-native-vector-icons/Entypo';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';
import SelectaddressControllers from './SelectaddressControllers';
import Feather from 'react-native-vector-icons/Feather';

// import RazorpayCheckout from 'react-native-razorpay';
import {connect} from 'react-redux';
import {DELETE_CURRENT_ADDRESS} from '../../redux/action/ActionName';

const {width, height} = Dimensions.get('window');
class Selectaddress extends SelectaddressControllers {
  handleDelete = (pincode: string) => {
    let updatedArr = this.props.allAddress.filter(
      (v: any) => v.pincode !== pincode,
    );
    this.setState({isModalVisible: false});
    console.log(updatedArr, 'dhdhdh');
  };
  render() {
    console.log(this.props.allAddress, 'fromselect');

    return (
      <View style={{width: width, height: height}}>
        <TouchableOpacity
          style={{position: 'absolute', zIndex: 1, top: 20, left: 10}}
          onPress={() => this.props.navigation.goBack()}>
          <Feather size={25} color={'black'} name="arrow-left" />
        </TouchableOpacity>
        <View style={styles.topBarContainer}>
          <Text style={styles.headingText}>Delivery Address</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NewAddress')}
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              top: 15,
              right: 20,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#E7AC27',
                padding: 7,
              }}>
              <Entypo name="plus" color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.props.allAddress}
          renderItem={({item}) => (
            <View style={styles.cartContainer}>
              <View style={{marginLeft: 8}}>
                {/* <FontAwesome name="dot-circle-o" size={25} color="#F5BF45" /> */}
                <TouchableOpacity style={styles.outerCircle}>
                  <TouchableOpacity
                    style={[styles.innerCircle, {backgroundColor: '#F5BF45'}]}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.addressTextContainer}>
                <Text style={styles.nameText}>
                  {/* {item.firstname} {item.lastname}{' '} */}
                  Prafulkumar
                </Text>
                <Text style={styles.deliveryAddresstext} numberOfLines={3}>
                  {item.flatAddress} {'\n'}
                  {item.cityName} ,{item.pincode}
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.allAddress.map(v =>
                      v.id === item.id
                        ? this.setState({
                            isModalVisible: !this.state.isModalVisible,
                          })
                        : this.setState({
                            isModalVisible: this.state.isModalVisible,
                          }),
                    );
                  }}>
                  <Entypo name="dots-three-vertical" size={25} color="black" />
                </TouchableOpacity>
              </View>
              {this.state.isModalVisible ? (
                <View style={[styles.modalContainer, styles.shadowProp]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('NewAddress', {
                        currentAddress: item,
                      });
                      this.setState({isModalVisible: false});
                    }}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>

                  <Text style={styles.bottomDash} />
                  <TouchableOpacity
                    onPress={() => {
                      this.props.deleteAddress(item.id);
                      this.setState({isModalVisible: false});
                    }}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                ''
              )}
            </View>
          )}
        />

        <View style={{position: 'absolute', bottom: 40, alignSelf: 'center'}}>
          <CustomButton
            text="Continue"
            handleOnpress={() =>
              //  this.props.navigation.navigate('PaymentMethod')
              this.handlePayment()
            }
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state: RootState) => {
//   console.log(state.Addnewaddress.allAddress, 'from addnewadress');

//   return {};
// };

const mapStateToProps = (state: any) => ({
  productData: state.AddtoCartReducer.productData,
  allAddress: state.Addnewaddress.allAddress,
});

const mapDisptachToProps = (dispatch: any) => ({
  deleteAddress: (pincode: string) =>
    dispatch({type: DELETE_CURRENT_ADDRESS, payload: pincode}),
});

export default connect(mapStateToProps, mapDisptachToProps)(Selectaddress);
