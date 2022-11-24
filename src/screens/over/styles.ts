import { StyleSheet } from "react-native";
import colors from "../../constants/colors";



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    width: '80%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  cardLandscape:{
    width: '80%',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image:{
    width: 200,
    height: 100,
  },
  title:{
    fontSize: 18,
    fontWeight: '700'
  },
  button:{
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText:{
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
})