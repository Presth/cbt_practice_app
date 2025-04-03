import TextField from "@/components/elements/TextField";
import { router } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import ComponentStyling from "@/styling/components.styles";

function ForgotPassword() {
  const sendCode = async () => {
    router.push("/otp");
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#fafafa",
      }}
    >
      <View style={{ padding: 20, flex: 1 }}>
        {/* header */}
        <View
          style={{
            marginTop: "30%",
            marginBottom: 30,
            gap: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Lato_Bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              fontFamily: "Lato_Regular",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            No worries! Enter your email below, and we’ll send you a code to
            reset it.
          </Text>
        </View>
        {/* end of header */}

        {/* input area */}
        <View>
          <TextField placeholder={"Email Address"} />

          <Pressable
            style={[ComponentStyling.primaryBtn, { marginTop: 10 }]}
            onPress={() => sendCode()}
          >
            <Text style={ComponentStyling.primaryBtnText}>Send Code</Text>
          </Pressable>
        </View>
        {/* end of input area */}
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;
