import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

function Statistics() {
  const widthAndHeight = 160;

  const series = [
    {
      value: 430,
      color: "#fbd203",
    },
    { value: 321, color: "#ffb300" },
    { value: 185, color: "#ff9100" },
    { value: 123, color: "#ff6c00" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", gap: 25 }}>
        <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.6} />

        <View style={styles.labelsContainer}>
          <View style={styles.label}>
            <View style={styles.labelDot}></View>
            <Text style={styles.labelTitle}>Mathematics</Text>
          </View>
          <View style={styles.label}>
            <View style={styles.labelDot}></View>
            <Text style={styles.labelTitle}>Mathematics</Text>
          </View>
          <View style={styles.label}>
            <View style={styles.labelDot}></View>
            <Text style={styles.labelTitle}>Mathematics</Text>
          </View>
          <View style={styles.label}>
            <View style={styles.labelDot}></View>
            <Text style={styles.labelTitle}>Mathematics</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: "18%",
          padding: 20,
          marginVertical: 15,
          backgroundColor: "#fff3e0",
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#eee",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Lato_Medium",
            fontSize: 16,
          }}
        >
          Take another test
        </Text>
      </View>

      <View
        style={{
          padding: 20,
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelsContainer: { marginVertical: "auto", gap: 10 },
  label: { flexDirection: "row", gap: 10 },
  labelDot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: "red",
    marginVertical: "auto",
  },
  labelTitle: {
    margin: "auto",
    fontFamily: "Lato_Medium",
    fontSize: 14,
  },
});
export default Statistics;
