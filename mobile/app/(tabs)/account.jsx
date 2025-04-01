import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

function Home() {
  return (
    <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
      <StatusBar style="auto" hidden={false} />
      <Text>Account settings</Text>
    </View>
  );
}

export default Home;
