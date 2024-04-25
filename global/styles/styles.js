import {Dimensions, StyleSheet} from 'react-native';

import {colors} from './colors';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  screenColorLight: {
    backgroundColor: colors.light.white,
  },
  screenColorBlack: {
    backgroundColor: colors.dark.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomItems: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textBlack: {
    color: 'black',
  },
  normalText: {
    fontSize: 20,
  },
  primaryButton: {
    backgroundColor: colors.light.yellow,
    width: width * 0.5,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  googleButton: {
    backgroundColor: '#F1F1F1',
    width: width * 0.5,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logo: {objectFit: 'contain', width: width * 0.09, height: height * 0.09},
  textInput: {borderWidth: 1, borderRadius: 20, width: '60%', color: 'black'},
  errorLabel: {
    color: '#FF0202',
    fontSize: 15,
    alignSelf:'flex-start'
  },
});
