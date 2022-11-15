import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
  },
  cardContainer: {
    borderRadius: 10,
    width: '70%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  label:{
    fontWeight: "400"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 30,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  reset: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  confirm: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
})