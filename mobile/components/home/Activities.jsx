import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Activities() {
  return (
    <View style={styles.activitiesContainer}>
      <Text
        style={{
          fontFamily: "Lato_Medium",
          fontSize: 14,
          color: "#aaa",
          paddingHorizontal: 5,
        }}
      >
        Today
      </Text>
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Text
        style={{
          fontFamily: "Lato_Medium",
          fontSize: 14,
          color: "#aaa",
          paddingHorizontal: 5,
          paddingTop: 10,
        }}
      >
        Yesterday
      </Text>
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </View>
  );
}

function Activity() {
  return (
    <View style={styles.activity}>
      <View style={styles.tickContainer}>
        <FontAwesome name="check" size={25} color={"#fff"} style={styles.fa} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Completed Test 'Mathematics'</Text>
        <Text style={styles.time}>5 minutes ago</Text>
      </View>
      <Pressable style={styles.moreBtn}>
        <FontAwesome name="chevron-right" size={15} style={styles.fa} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  activitiesContainer: {
    padding: 20,
    paddingVertical: 15,
    gap: 10,
  },
  activity: {
    backgroundColor: "#fafafa",
    padding: 12,
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 1,
    flexDirection: "row",
    gap: 10,
  },
  tickContainer: {
    width: 35,
    height: 35,
    backgroundColor: "#faa723",
    borderRadius: 15,
    marginVertical: "auto",
  },
  fa: { margin: "auto" },
  titleContainer: { gap: 8, marginVertical: "auto", flex: 1 },
  title: { fontFamily: "Lato_Medium", fontSize: 16 },
  time: { fontFamily: "Lato_Regular", fontSize: 14, color: "#aaa" },
  moreBtn: {
    width: 25,
    height: 25,
    borderRadius: 15,
    elevation: 1,
    backgroundColor: "#fff",
    marginVertical: "auto",
  },
});

export default Activities;
