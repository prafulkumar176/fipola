import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export const Style = StyleSheet.create({
  outerView: {
    height: '100%',
    width: '100%',
    // backgroundColor: '#F5BF45',
    alignItems: 'center',
  },
  innerView: {
    width: 320,
    height: 390,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  rightView: {
    width: height === 592 ? 80 : 100,
    height: height === 592 ? 80 : 100,
    backgroundColor: '#F5BF45',
    borderRadius: height === 592 ? 40 : 50,
    alignItems: 'center',
    fontWeight: 800,
    marginTop: height === 592 ? 45 : 100,
  },
  titleText: {
    color: '#18161B',
    fontSize: 24,
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 29,
    textTransform: 'capitalize',
  },
  homeIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F62B29',
    borderRadius: 30,
    position: 'absolute',
    // bottom: height === 592 ? 140 : 190,
    alignItems: 'center',
    bottom: 150,
    left: 170,
  },
  ordertext: {
    color: '#A9A9A9',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 26,
    textTransform: 'capitalize',
  },
  backgroundimg: {
    height: height,
    width: width,
    backgroundColor: '#F5BF45',
    opacity: 1,
  },
});
