// deliveryBoy
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
// console.log(Math.floor(height), Math.floor(width));
export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    // justifyContent: 'center',
  },
  subContainer: {
    height: height / 1.6,
  },
  deliveryBoy: {
    height: height / 3.8,
    width: 192,
    borderRadius: 192 / 2,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: 0,
  },
  roundedColor: {
    height: 222,
    width: 222,
    borderRadius: 222 / 2,
    backgroundColor: '#fdf2da',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  timeText: {
    color: '#18161B',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  descriptionText: {
    color: '#BAB9BB',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    width: 280,
    alignSelf: 'center',
    marginTop: 20,
    lineHeight: 28,
  },
  threedots: {
    width: 16,
    height: 16,
    borderRadius: 20 / 2,

    marginHorizontal: 10,
  },
  threedotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: Math.floor(height) === 742 ? 18 : 30,

    // borderWidth: 1,
  },
  bottomContainer: {
    backgroundColor: '#F5C559',
    height: Math.floor(height) === 742 ? height / 1.4 : height / 1.2,
  },
  loginText: {
    color: '#18161B',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },

  mobileIcon: {
    // borderWidth: 1,
    width: 30,
    position: 'absolute',
    top: 94,
    left: Math.floor(width) === 392 ? 60 : 40,
    zIndex: 10,
  },
  inputText: {
    paddingHorizontal: 60,
    paddingTop: 20,
    color: '#18161B',
    fontSize: 16,
    fontWeight: '500',
    textAlignVertical: 'top',
  },
});
