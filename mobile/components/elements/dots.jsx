import React from "react";
import { View } from "react-native";

function Dots({ active, length }) {
  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
      }}
    >
      {[...Array(length)].map((_, index) => (
        <View
          key={index}
          style={{
            minWidth: 15,
            minHeight: 15,
            borderRadius: 5,
            backgroundColor: active === index + 1 ? "#aaa" : "black",
            elevation: 1,
          }}
        ></View>
      ))}
    </View>
  );
}

export default Dots;
