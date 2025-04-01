import TextField from "@/components/elements/TextField";
import { Link, router } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import ComponentStyling from "@/styling/components.styles";

function SignIn() {
  const login = async () => {
    router.push("/home");
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
            Login to your account
          </Text>
          <Text
            style={{
              fontFamily: "Lato_Regular",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Don't have an account?{" "}
            <Link href={"/signup"} style={{ color: "blue" }}>
              Create Account
            </Link>
          </Text>
        </View>
        {/* end of header */}

        {/* input area */}
        <View>
          <TextField placeholder={"Email Address"} />
          <TextField placeholder={"Password"} />

          <Link
            href={"/forgotpassword"}
            style={{ color: "#666", textAlign: "right", padding: 5 }}
          >
            Forgot Password
          </Link>

          <Pressable
            onPress={login}
            style={[ComponentStyling.primaryBtn, { marginTop: 10 }]}
          >
            <Text style={ComponentStyling.primaryBtnText}>Login</Text>
          </Pressable>
        </View>
        {/* end of input area */}

        {/* social media login */}
        <View
          style={{
            borderTopWidth: 2,
            borderTopColor: "#ddd",
            marginTop: "15%",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 20,
              textAlign: "center",
              position: "relative",
              top: -12,
              margin: "auto",
              backgroundColor: "#fafafa",
              fontSize: 15,
              fontFamily: "Lato_Regular",
            }}
          >
            or signin with
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Pressable
              style={{
                padding: 5,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#ddd",
                minWidth: 100,
              }}
            >
              <Image
                source={require("@/assets/images/google-logo.png")}
                style={{ width: 30, height: 30, alignSelf: "center" }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignIn;
