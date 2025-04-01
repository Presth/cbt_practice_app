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
  RefreshControl,
  SafeAreaView,
} from "react-native";

function SecondScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row-reverse", padding: 20, paddingTop: 30 }}
      >
        <Pressable onPress={() => router.push("/signin")}>
          <Text style={ComponentStyling.inverseBtnText}>Skip</Text>
        </Pressable>
      </View>
      <View>
        <View
          style={[
            AuthStyles.onboarding.imgContainer(screenWidth),
            { marginTop: 10 },
          ]}
        >
          <Image
            source={require("@/assets/images/student.jpg")}
            style={{
              flex: 1,
              height: "100%",
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={AuthStyles.onboarding.title(screenWidth)}>
            What do we have for you?
          </Text>
          <Text style={AuthStyles.onboarding.description}>
            Whether for exams, professional assessments or academic exams,
            Peakspot CBT App supports you with practice tests, performance
            tracking, and study insights to enhance your strengths and improve
            weak areas.
          </Text>
        </View>

        <Dots length={3} active={2} />

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
              onPress={() => router.back()}
            >
              <Text style={ComponentStyling.inverseBtnText}>Prev</Text>
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
              onPress={() => router.push("/thirdScreen")}
            >
              <Text style={ComponentStyling.primaryBtnText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SecondScreen;
