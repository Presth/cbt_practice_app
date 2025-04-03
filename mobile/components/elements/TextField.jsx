import ComponentStyling from "@/styling/components.styles";
import React from "react";
import { TextInput, View } from "react-native";

function TextField({ value, setValue, placeholder }) {
  return (
    <View style={ComponentStyling.inputContainer}>
      <TextInput style={ComponentStyling.inputText} placeholder={placeholder} />
    </View>
  );
}

export default TextField;
