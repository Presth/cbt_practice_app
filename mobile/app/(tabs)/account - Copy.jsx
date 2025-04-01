import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

function AccountSetting() {
  return (
    <View style={{ backgroundColor: "#f2f6f7", flex: 1 }}>
      <StatusBar style="dark" translucent={true} hidden={false} />

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: "10%",
            paddingHorizontal: 20,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              marginVertical: "auto",
              width: 20,
              height: 40,
              paddingTop: 5,
            }}
          >
            <FontAwesome
              name="chevron-left"
              size={20}
              style={{ margin: "auto" }}
            />
          </Pressable>
          <Text
            style={{ margin: "auto", fontFamily: "Lato_Bold", fontSize: 24 }}
          >
            My Profile
          </Text>
          <View style={{ width: 20 }}></View>
          {/*to balance line*/}
        </View>

        <View>
          <View style={{ marginVertical: 25 }}>
            <Image
              source={require("@/assets/images/mypic.png")}
              style={{
                width: 120,
                height: 120,
                margin: "auto",
                borderRadius: 15,
              }}
            />
            <View
              style={{
                position: "relative",
                top: -28,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  backgroundColor: "#faa723",
                  color: "#fff",
                  fontFamily: "Lato_Medium",
                  padding: 4,
                  paddingHorizontal: 8,
                  margin: "auto",
                  borderRadius: 10,
                }}
              >
                Free
              </Text>
            </View>
            <View style={{ gap: 5 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Lato_Bold",
                  textAlign: "center",
                }}
              >
                John Doe{" "}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Lato_Regular",
                  textAlign: "center",
                  color: "#666",
                }}
              >
                johndoe@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Pressable
            style={{
              padding: 15,
              backgroundColor: "#faa723",
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Lato_Bold",
                fontSize: 18,
                color: "#fff",
              }}
            >
              Share
            </Text>
          </Pressable>
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.actionBtn}>
            <FontAwesome name="lock" size={16} style={styles.fa} />
            <Text style={styles.actionBtnTxt}>Change Password</Text>
          </Pressable>
          <Pressable style={styles.actionBtn}>
            <FontAwesome name="arrow-up" size={16} style={styles.fa} />
            <Text style={styles.actionBtnTxt}>Upgrade Plan</Text>
          </Pressable>
          <Pressable style={styles.actionBtn}>
            <FontAwesome name="paperclip" size={16} style={styles.fa} />
            <Text style={styles.actionBtnTxt}>Report an issue</Text>
          </Pressable>
          <Pressable style={styles.actionBtn}>
            <FontAwesome
              name="trash"
              size={16}
              color={"red"}
              style={styles.fa}
            />
            <Text style={[styles.actionBtnTxt, { color: "red" }]}>
              Delete Account
            </Text>
          </Pressable>
        </View>
        <View style={styles.logoutContainer}>
          <Pressable style={styles.logoutBtn}>
            <Text style={styles.logoutBtnTxt}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 25,
  },
  actionBtn: {
    flexDirection: "row",
    gap: 15,
    padding: 15,
  },
  fa: {
    marginVertical: "auto",
  },
  actionBtnTxt: {
    fontFamily: "Lato_Medium",
    fontSize: 16,
    marginVertical: "auto",
  },
  logoutContainer: {
    marginTop: "10%",
    padding: "20",
  },
  logoutBtn: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eaeaea",
  },
  logoutBtnTxt: {
    textAlign: "center",
    fontFamily: "Lato_Medium",
    fontSize: 16,
  },
});

export default AccountSetting;
