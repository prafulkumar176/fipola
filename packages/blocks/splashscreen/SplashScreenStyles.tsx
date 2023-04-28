import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5C559',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
  foodImage: {
    height: 254,
    width: 409,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  logo: {
    width: 190,
    height: 70,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  foodImage2: {
    width: 409,
    height: 254,
    resizeMode: 'contain',
    marginBottom: -12,
  },
});
