import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  selectionContainer: {
    width: '70%',
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 10,
  },
  selectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButton:{
    backgroundColor: colors.primary,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  startText:{
    color: colors.text,
    fontWeight: 'bold',
  },
  })