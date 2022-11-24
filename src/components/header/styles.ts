import { Dimensions, StatusBar, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const {width, height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: colors.text,
    fontFamily: 'Poppins-Bold'
  },
})