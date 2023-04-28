import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cartContainer: {
    marginLeft: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    width: '92%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 25,
    borderRadius: 10,
  },
  nameText: {
    color: '#18161B',
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryAddresstext: {
    color: '#BAB9BB',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    // borderWidth: 1,
    width: 250,
    height: 66,
    marginTop: 10,
    lineHeight: 22,
  },
  addressTextContainer: {
    flexDirection: 'column',
    marginHorizontal: 8,
    paddingLeft: 10,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#BAB9BB',
    padding: 3,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
