import React from "react";
import { View } from "react-native";
import Subject from "./subject";

function SubjectsList() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
      <Subject />
      <Subject />
      <Subject />
      <Subject />
      <Subject />
    </View>
  );
}

export default SubjectsList;
