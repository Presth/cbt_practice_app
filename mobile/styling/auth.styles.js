import { StyleSheet } from "react-native";

const AuthStyles = StyleSheet.create({
  onboarding: {
    imgContainer: (width) => ({
      width: Math.floor(width * 0.9),
      height: Math.floor(width * 0.9),
      borderRadius: 35,
      overflow: "hidden",
      alignSelf: "center",
      marginTop: "18%",
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center",
      elevation: 1,
    }),
    title: (width) => ({
      width: width * 0.8,
      fontSize: 30,
      textAlign: "center",
      paddingVertical: 10,
      margin: "auto",
      fontFamily: "Lato_Bold",
    }),
    description: {
      fontFamily: "Lato_Regular",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 25,
      paddingHorizontal: 20,
    },
  },
});

export default AuthStyles;
