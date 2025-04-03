import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

function Subject() {
  return (
    <View style={{ padding: 7, width: "50%" }}>
      <View style={styles.subjectContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.icon}
          />
          <View style={styles.icon2container}>
            <View style={styles.icon}>
              <AnimatedCircularProgress
                size={24}
                width={3}
                fill={80}
                tintColor="#306942"
              >
                {() => (
                  <Text style={{ fontFamily: "Lato_Bold", fontSize: 14 }}>
                    2
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>
        </View>
        <Text style={styles.subjectName}>Mathematics</Text>
        <Pressable
          style={styles.startBtn}
          onPress={() => router.push("take-test")}
        >
          <Text style={styles.startBtnText}>Take Test</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBtn: {
    paddingHorizontal: 15,
    paddingBottom: 16,
    flex: 1,
  },
  contentTitle: {
    color: "#aaa",
    fontFamily: "Lato_Medium",
    fontSize: 16,
    textAlign: "center",
  },
  subjectContainer: {
    backgroundColor: "#d8ebde",
    padding: 20,
    borderRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 3,
  },
  icon2container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  subjectName: {
    fontFamily: "Lato_Medium",
    fontSize: 16,
    color: "#777",
    marginTop: 45,
  },
  startBtn: {
    backgroundColor: "white",
    padding: 6,
    paddingBottom: 8,
    borderRadius: 15,
    marginTop: 10,
  },
  startBtnText: {
    textAlign: "center",
    fontFamily: "Lato_Medium",
    fontSize: 16,
  },
});

export default Subject;
