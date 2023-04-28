/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {styles} from './Homescreenstyles';
import HomescreenController from './HomescreenController';
import {entries, flatListData2, flatlistData} from './config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatListCards from './componets/flatListCards';
import ReceipeFlatCards from './componets/receipeFlatCards';

import CustomInput from '../../components/CustomInput';
import {connect} from 'react-redux';
import {addtocart} from '../../redux/action/ActionType';
import {DELIVERY_LOCATION_PINCODE} from '../../redux/action/ActionName';

const {width: screenWidth} = Dimensions.get('window');

const renderItem = ({item}: any, parallaxProps: any) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={item.illustration}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

class Homescreen extends HomescreenController {
  render() {
    // console.log(this.state.ProfileUrl);
    const ImageUrl = this.props?.route?.params?.ImageUrl;
    // console.log(ImageUrl, 'From home');
    // console.log(this.props.route.params.ImageUrl, 'from home');

    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.topBarContainer}>
              <TouchableOpacity
                style={styles.menuIcon2}
                onPress={() => this.props.navigation.openDrawer()}>
                <Feather name="align-left" size={28} color="#FFFFFF" />
              </TouchableOpacity>

              <Image
                source={require('./assets/logo_png.png')}
                style={styles.logoImage}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
                <Image
                  source={{
                    uri: ImageUrl
                      ? ImageUrl
                      : 'https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg',
                  }}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.searchBarContainer}>
              <AntDesign
                name="search1"
                size={20}
                color="#A4A1A1"
                style={{marginLeft: 10}}
              />
              <TextInput placeholder="Search..." style={styles.inputField} />
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: true})}>
                <MaterialIcons
                  name="location-pin"
                  size={22}
                  color="#A4A1A1"
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.pincodeText}
                value={this.props.pincode ? this.props.pincode : ''}
              />
              {/* {this.state.modalVisible ? '' : this.state.pinCodeVal} */}
            </View>

            <View style={styles.container}>
              <Carousel
                sliderWidth={screenWidth}
                // sliderHeight={height / 50}
                itemWidth={screenWidth - 65}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                autoplay={true}
                autoplayInterval={2000}
                loop={true}
                onSnapToItem={(index: any) => this.handlePosition(index)}
              />
            </View>
            <Text style={styles.paginationText}>{this.pagination}</Text>
          </View>
          <View style={styles.flatlistContainer}>
            <Text style={styles.bestText}>Best Sellers</Text>

            <FlatList
              data={flatlistData}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SingleProduct', {
                      items: item,
                      productData: this.props.productData,
                    })
                  }>
                  <FlatListCards
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    quantity={item.quantity}
                    actualPrice={item.actualPrice}
                    offPrice={item.offPrice}
                    img={item.img}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={styles.receipeContainer}>
            <View style={styles.receipesCardContainer}>
              <Text style={styles.bestText}>Recepies</Text>
              <TouchableOpacity style={{marginRight: 15}}>
                <Feather name="arrow-right" size={25} color={'black'} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={flatListData2}
              horizontal
              renderItem={({item}: any) => (
                <ReceipeFlatCards
                  id={item.id}
                  img={item.img}
                  title={item.title}
                />
              )}
            />
          </View>
          <View style={styles.BottomMainContainer}>
            <View style={styles.bottomContainer}>
              <Text style={styles.pressText}>Press Corner</Text>
              <View style={styles.bottomSubContainer}>
                <Image
                  source={require('./assets/img1.png')}
                  style={styles.PressCornerImg}
                />
                <Text style={styles.bottomText}>
                  Fipola on expansion mode, enters Hyderabad with 14 stores
                </Text>
              </View>
              <Text style={styles.timeText}>
                September 09, 2021 | The Hindu
              </Text>
            </View>
          </View>

          <View style={styles.roundMusicApp}>
            <TouchableOpacity
              style={styles.headsetIcon}
              onPress={() => this.setState({isModelVisible: true})}>
              <MaterialIcons size={30} name="headset" color={'white'} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Modal Of location pin */}

        <Modal visible={this.state.modalVisible} transparent={true}>
          <View style={styles.blackscreen}></View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  right: 15,
                  top: 15,
                }}
                onPress={() => this.handleCloseModal()}>
                <Entypo size={28} color={'black'} name="cross" />
              </TouchableOpacity>

              <View style={{marginTop: 30}}>
                <Text style={styles.modalText}>Delivery Location</Text>
                <Text style={styles.modalDescriptionText}>
                  serviceable locations : Bengaluru I Chennai I Coimbatore I
                  Hysrabad Puducherry I Turpur I vellore
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <Entypo
                  size={28}
                  color={'#F62B2A'}
                  name="location-pin"
                  style={styles.locationIcon}
                />
                <CustomInput
                  placeholder="Enter Pin Code"
                  style={styles.pinscreenInput}
                  handleInputText={(e: string) => this.props.deliveryPincode(e)}
                  maxLength={6}
                  keyboardType={'numeric'}
                  // onBlur={undefined}
                />
                <View style={styles.roundMusicApp2}>
                  <TouchableOpacity
                    style={styles.headsetIcon2}
                    onPress={() => this.setState({modalVisible: false})}>
                    <Octicons
                      size={25}
                      name="arrow-right"
                      color={'#FFFFFF'}
                      style={{marginLeft: -2}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* MODAL FOR THE SHARE LIST */}

        <Modal transparent visible={this.state.isModelVisible}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderWidth: 1,
              backgroundColor: '#18161B',
              opacity: 0.9,
            }}>
            <TouchableOpacity
              style={[
                styles.modelTab,
                {right: 15, bottom: 200, backgroundColor: '#3EC350'},
              ]}
              onPress={() => this.props.navigation.navigate('Message')}>
              <FontAwesome
                name="whatsapp"
                size={30}
                color="white"
                style={{paddingTop: 12}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modelTab,
                {right: 15, bottom: 125, backgroundColor: '#F5BF45'},
              ]}>
              <MaterialIcons
                name="chat"
                size={30}
                color="white"
                style={{paddingTop: 12}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modelTab,
                {right: 15, bottom: 50, backgroundColor: 'white'},
              ]}
              onPress={() => this.setState({isModelVisible: false})}>
              <Entypo
                style={{paddingTop: 12}}
                name="cross"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state.DeliveryPincodeReducer, 'values');

  return {
    pincode: state.DeliveryPincodeReducer.pincode,
    productData: state.AddtoCartReducer.productData,
  };
};
export const mapDisptachToProps = (disptach: any) => ({
  deliveryPincode: (pincode: string) =>
    disptach({type: DELIVERY_LOCATION_PINCODE, payload: pincode}),
});

export default connect(mapStateToProps, mapDisptachToProps)(Homescreen);
