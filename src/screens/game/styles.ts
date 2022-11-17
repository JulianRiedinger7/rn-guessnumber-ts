import { StyleSheet } from "react-native";
import colors from "../../constants/colors";



export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cardContainer: {
    width: '70%',
    height: 200,
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 10,
  },
  cardTitle:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer:{
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  },
  lowerButton:{
    backgroundColor: colors.secondary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  lowerText:{
    color: colors.white,
    fontWeight: '700',
  },
  greaterButton:{
    backgroundColor: colors.primary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  greaterText:{
    color: colors.text,
    fontWeight: '700',
  },
})