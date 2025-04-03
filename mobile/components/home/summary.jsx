import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, { paddingHorizontal: 8 }]}>
          <FontAwesome
            name="graduation-cap"
            size={24}
            color={"#faa723"}
            style={{ marginVertical: "auto" }}
          />
          <View>
            <Text style={styles.boxNo}>64</Text>
            <Text style={styles.boxText}>Tests tried</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: "#fcd7e2" }]}>
          <FontAwesome
            name="unlock-alt"
            size={24}
            style={{ marginVertical: "auto", marginHorizontal: 3 }}
            color={"#bf2177"}
          />
          <View>
            <Text style={styles.boxNo}>2</Text>
            <Text style={[styles.boxText, { color: "#bf2177" }]}>
              Trials left
            </Text>
          </View>
        </View>
      </View>

      <View style={{}}>
        <View>
          <View>
            <Text style={styles.bestScoreTitle}>Highest Score</Text>
            <Text style={styles.bestScore}>20</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: "10%", flexDirection: "row" },
  boxContainer: { width: "40%" },
  box: {
    marginRight: 12,
    padding: 14,
    backgroundColor: "#fff3e0",
    borderRadius: 10,
    flexDirection: "row",
    gap: 4,
  },
  boxNo: { fontFamily: "Lato_Bold", fontSize: 24, marginHorizontal: 5 },
  boxText: { fontFamily: "Lato_Medium", color: "#faa723", marginVertical: 5 },
  bestScoreTitle: {
    marginBottom: 2,
    backgroundColor: "#faa723",
    color: "#fff",
    padding: 5,
    paddingHorizontal: 8,
    maxWidth: 100,
    textAlign: "center",
    fontFamily: "Lato_Medium",
    fontSize: 14,
    borderRadius: 10,
  },
  bestScore: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Lato_Bold",
  },
});

export default Summary;
