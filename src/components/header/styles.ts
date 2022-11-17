import { StatusBar, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    height: 100,
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