import { StyleSheet } from "react-native";

const ComponentStyling = StyleSheet.create({
  inverseBtn: {
    padding: 16,
    backgroundColor: "#ccc",
    borderRadius: 10,
    elevation: 1,
    minWidth: 100,
  },
  inverseBtnText: {
    fontFamily: "Lato_Medium",
    fontSize: 18,
    textAlign: "center",
  },
  primaryBtn: {
    padding: 16,
    backgroundColor: "black",
    borderRadius: 10,
    elevation: 1,
    minWidth: 100,
  },
  primaryBtnText: {
    fontFamily: "Lato_Medium",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    padding: 8,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
  },
  inputText: {
    fontFamily: "Lato_Regular",
    fontSize: 15,
  },
});

export default ComponentStyling;
