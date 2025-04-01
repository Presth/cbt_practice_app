import TextField from "@/components/elements/TextField";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import ComponentStyling from "@/styling/components.styles";

function ResetPassword() {
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
            Reset Password
          </Text>
          <Text
            style={{
              fontFamily: "Lato_Regular",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Enter a new password to have regain access to your dashboard
          </Text>
        </View>
        {/* end of header */}

        {/* input area */}
        <View>
          <TextField placeholder={"New Password"} />
          <TextField placeholder={"Confirm New Password"} />

          <Pressable style={[ComponentStyling.primaryBtn, { marginTop: 10 }]}>
            <Text style={ComponentStyling.primaryBtnText}>Reset Password</Text>
          </Pressable>
        </View>
        {/* end of input area */}
      </View>
    </ScrollView>
  );
}

export default ResetPassword;
