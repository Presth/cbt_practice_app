import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function Header() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("@/assets/images/mypic.png")}
        style={styles.profileImg}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>Precious Afolabi</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.helperText}>Free Tier</Text>
          <Pressable style={styles.upgradeBtn}>
            <Text style={styles.upgradeBtnText}>Upgrade</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={() => router.push("/account")}>
          <FontAwesome name="cog" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  nameContainer: {
    paddingHorizontal: 15,
    gap: 5,
    marginVertical: "auto",
    flex: 1,
  },
  userName: { fontFamily: "Lato_Bold", fontSize: 16 },
  helperText: {
    color: "#aaa",
    fontFamily: "Lato_Medium",
    marginVertical: "auto",
  },
  upgradeBtn: {
    backgroundColor: "#111",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    paddingBottom: 6,
  },
  upgradeBtnText: { fontFamily: "Lato_Medium", color: "white", fontSize: 14 },
  btnContainer: { marginVertical: "auto", alignSelf: "flex-end" },
  btn: {
    borderColor: "#f2f2f2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
export default Header;
