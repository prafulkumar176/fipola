import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: height,
  },
  textInput: {
    borderWidth: 2,
    width: 320,
    height: 60,
    borderRadius: 60,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingLeft: 30,
    // zIndex: 0,
    position: 'absolute',
  },
  textInputLabel: {
    position: 'absolute',
    left: 55,
    color: '#18161B',
    fontWeight: '600',
    fontSize: 14,
    backgroundColor: 'white',
    paddingLeft: 5,
    borderRadius: 5,
  },
  bottomContainer: {
    width: width,
    height: 409,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    // borderWidth: 1,
    padding: 15,
  },
  mapStyles: {
    flex: 1,
    height: '70%',
    width: '100%',
  },
});
