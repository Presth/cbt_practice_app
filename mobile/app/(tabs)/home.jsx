import Header from "@/components/home/header";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

function Home() {
  return (
    <View
      style={{
        paddingVertical: 35,
      }}
    >
      <StatusBar style="auto" hidden={false} />
      <Header />
    </View>
  );
}

export default Home;
