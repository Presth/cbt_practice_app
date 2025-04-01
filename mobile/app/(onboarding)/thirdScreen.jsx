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

function ThirdScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View style={AuthStyles.onboarding.imgContainer(screenWidth)}>
          <Image
            source={require("@/assets/images/application_exam.jpg")}
            style={{
              flex: 1,
              height: "100%",
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={AuthStyles.onboarding.title(screenWidth)}>
            Get Started
          </Text>
          <Text style={AuthStyles.onboarding.description}>
            Are you excited to get started? Create an account or log in to
            access your dashboard.
          </Text>
        </View>

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <Dots length={3} active={3} />
        </View>

        <View
          style={{
            marginTop: 20,
            padding: 20,
            gap: 10,
          }}
        >
          <Pressable
            style={ComponentStyling.primaryBtn}
            onPress={() => router.push("/signup")}
          >
            <Text style={ComponentStyling.primaryBtnText}>Create Account</Text>
          </Pressable>

          <Pressable
            style={ComponentStyling.inverseBtn}
            onPress={() => router.push("/signin")}
          >
            <Text style={ComponentStyling.inverseBtnText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default ThirdScreen;
