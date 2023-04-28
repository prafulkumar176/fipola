import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#F5BF45',
  },
  emailImage: {
    height: 130,
    width: 130,
    borderWidth: 5,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  otpText: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
  previousNum: {
    marginTop: 30,
  },
  sendOptText: {
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'center',
  },
  numberText: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginTop: 3,
  },
  roundInputs: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    paddingHorizontal: 20,
    fontSize: 28,
    color: 'black',
  },
  roundContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  bottomContainer: {
    paddingVertical: 160,
  },
  notReceivedOtpText: {
    color: '#705A2C',
    fontSize: 17,
    fontWeight: '500',
  },
  notReceivedOtpConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responseText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#DF201F',
    color: '#DF201F',
    fontSize: 17,
    fontWeight: '500',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'white',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 4,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  OtpInputView: {
    width: '80%',
    height: 80,
    marginBottom: 120,
    color: 'black',
  },
});
