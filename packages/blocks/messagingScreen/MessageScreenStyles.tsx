import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  topBarContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5BF45',
    height: 70,
    top: 0,
  },
  headingText: {
    fontWeight: '600',
    fontSize: 24,
    color: '#18161B',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
