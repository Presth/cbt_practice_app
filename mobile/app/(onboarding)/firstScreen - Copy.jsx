import React, { useState } from "react";

import Dots from "@/components/elements/dots";
import AuthStyles from "@/styling/auth.styles";
import ComponentStyling from "@/styling/components.styles";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  Image,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
  Pressable,
} from "react-native";

function FirstScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View>
        <View style={AuthStyles.onboarding.imgContainer(screenWidth)}>
          <Image
            source={require("@/assets/images/computer-training.jpg")}
            style={{
              flex: 1,
              height: "100%",
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={AuthStyles.onboarding.title(screenWidth)}>
            Welcome Peakspot CBT App
          </Text>
          <Text style={AuthStyles.onboarding.description}>
            Thank you for choosing Peakspot CBT App to enhance your test
            preparation. Our app is designed to provide a seamless and efficient
            practice experience, helping you build confidence and improve your
            test-taking skills.
          </Text>
        </View>

        <Dots length={3} active={1} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Pressable
              style={ComponentStyling.inverseBtn}
              onPress={() => router.push("/signin")}
            >
              <Text style={ComponentStyling.inverseBtnText}>Skip</Text>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Pressable
              style={ComponentStyling.primaryBtn}
              onPress={() => router.push("/secondScreen")}
            >
              <Text style={ComponentStyling.primaryBtnText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default FirstScreen;
