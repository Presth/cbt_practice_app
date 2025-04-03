import TextField from "@/components/elements/TextField";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import ComponentStyling from "@/styling/components.styles";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

function VerifyCode() {
  const verifyOtp = () => {
    router.push("/resetpassword");
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
            Verify Otp
          </Text>
          <Text
            style={{
              fontFamily: "Lato_Regular",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Enter the 6-digit code we sent to your email
          </Text>
        </View>
        {/* end of header */}

        {/* input area */}
        <View>
          <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
            <OtpInput numberOfDigits={4} />
          </View>

          <Pressable
            style={[ComponentStyling.primaryBtn, { marginTop: 10 }]}
            onPress={() => verifyOtp()}
          >
            <Text style={ComponentStyling.primaryBtnText}> Verify Code </Text>
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: 20,
              gap: 5,
            }}
          >
            <Text
              style={{
                textAlign: "right",
                fontFamily: "Lato_Regular",
                fontSize: 15,
              }}
            >
              Didn't recieve the code yet?
            </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: "Lato_Medium",
                  fontSize: 15,
                  margin: "auto",
                }}
              >
                Resend
              </Text>
            </Pressable>
          </View>
        </View>
        {/* end of input area */}
      </View>
    </ScrollView>
  );
}

export default VerifyCode;
