import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const {width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeContainer: {
    opacity: 0.5,
  },
  homeContainer2: {
    opacity: 1,
  },
  topBarContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    backgroundColor: '#F5BF45',
    height: 82,
    alignItems: 'center',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  menuIcon2: {
    backgroundColor: '#E7AC27',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    padding: 10,
    alignSelf: 'center',
    marginLeft: 12,
  },
  logoImage: {
    width: 120,
    height: 45,
    resizeMode: 'contain',
    // marginTop: 15,
    alignSelf: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputField: {
    width: width / 1.6,
    height: 54,
    paddingLeft: 20,
    borderRightWidth: 1,
    borderColor: '#A4A1A1',
  },
  pincodeText: {
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 3,
    color: '#A4A1A1',
  },
  container: {
    height: height / 4,
    marginTop: 25,
    backgroundColor: '#FFFFFF',
  },
  item: {
    width: screenWidth - 60,
    height: height / 4,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    // resizeMode: 'contain',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  paginationText: {
    position: 'absolute',
    top: 280,
    left: 110,
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    marginHorizontal: 5,
    backgroundColor: '#F5BF45',
  },
  inactiveDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  flatlistContainer: {
    paddingTop: 25,
    backgroundColor: '#FFFFFF',
    paddingBottom: 25,
  },
  bestText: {
    fontWeight: '600',
    fontSize: 20,
    fontStyle: 'normal',
    color: '#18161B',
    paddingHorizontal: 15,
    lineHeight: 40,
    // paddingTop: 15,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18161B',
    // fontFamily: 'Montserrat Alternates',
    width: 150,
    height: 40,
    marginTop: 12,
  },
  productImage: {
    height: 95,
    width: 145,
    borderRadius: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
    marginTop: -15,
  },
  priceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F62B2A',
  },
  offText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#BAB9BB',
    textDecorationLine: 'line-through',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    width: 145,
    height: 38,
    backgroundColor: '#F5BF45',
    borderRadius: 60,
    padding: 10,
    marginTop: 12,
  },
  decrementText: {
    fontWeight: '500',
    fontSize: 15,
  },
  counterText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
    width: 50,
    textAlign: 'center',
    height: 35,
    paddingTop: 5,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#FFFFFF',
  },
  flatContainer: {
    marginLeft: 16,
    marginVertical: 8,
  },

  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18161B',
    // fontFamily: 'Montserrat Alternates',
    width: 150,
    height: 40,
    marginTop: 12,
  },
  receipesImages: {
    height: 130,
    width: 255,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  receipesTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#18161B',
    padding: 18,
  },
  receipeContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingTop: 18,
    paddingBottom: 25,
  },
  card: {
    backgroundColor: 'white',
  },
  receipesFlatList: {
    marginLeft: 16,
    marginVertical: 8,
    width: 255,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  receipesCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BottomMainContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 10,
    marginBottom: 30,
  },
  PressCornerImg: {
    width: 350,
    height: 149,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 280,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  bottomText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#18181B',
    width: 360,
    marginTop: 20,
    lineHeight: 22,
    // marginLeft: -25,
  },
  timeText: {
    color: '#F62B2A',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
  bottomSubContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressText: {
    fontWeight: '600',
    fontSize: 20,
    fontStyle: 'normal',
    color: '#18161B',
    lineHeight: 40,
  },
  roundMusicApp: {
    width: 55,
    height: 55,
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: '#F72B2A',
    bottom: 20,
    right: 20,
  },
  headsetIcon: {
    textAlign: 'center',
    padding: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    // opacity:0.6
    // backgroundColor: 'black',
  },
  blackscreen: {
    height: '60%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 350,
    marginBottom: 0,
    opacity: 1,
    // borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#18161B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  modalDescriptionText: {
    color: '#A9A9A9',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
    textTransform: 'capitalize',
    width: 318,
    height: 74,
    textAlign: 'center',
    marginTop: 25,
  },
  pinscreenInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 60,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: '500',
    textAlignVertical: 'top',
    color: 'black',
    // borderWidth: 1,
    borderRadius: 60,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  roundMusicApp2: {
    width: 55,
    height: 55,
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: '#F72B2A',
    bottom: 2.5,
    right: 5,
  },
  headsetIcon2: {
    textAlign: 'center',
    padding: 15,
    paddingHorizontal: 20,
  },
  locationIcon: {
    position: 'absolute',
    bottom: 15,
    zIndex: 1,
    left: 15,
  },
  modelTab: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    position: 'absolute',
    alignItems: 'center',
  },
});
