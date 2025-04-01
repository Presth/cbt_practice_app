import Activities from "@/components/home/Activities";
import Header from "@/components/home/header";
import Statistics from "@/components/home/Statistics";
import Subject from "@/components/home/subject";
import SubjectsList from "@/components/home/subjectsList";
import Summary from "@/components/home/summary";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";

function Home() {
  const [activeTab, setActiveTab] = useState("statistics");

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          marginTop: 35,
        }}
      >
        <StatusBar style="dark" translucent={true} hidden={false} />

        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: "10%",
              marginBottom: 10,
            }}
          >
            <Header />

            <Summary />
          </View>

          <View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#dadada",
              }}
            >
              <Pressable
                style={styles.titleBtn(activeTab === "statistics")}
                onPress={() => setActiveTab("statistics")}
              >
                <Text style={styles.contentTitle}>Statistics</Text>
              </Pressable>
              <Pressable
                style={styles.titleBtn(activeTab === "course")}
                onPress={() => setActiveTab("course")}
              >
                <Text style={styles.contentTitle}>Courses</Text>
              </Pressable>
              <Pressable
                style={styles.titleBtn(activeTab === "activities")}
                onPress={() => setActiveTab("activities")}
              >
                <Text style={styles.contentTitle}>Activities</Text>
              </Pressable>
            </View>
          </View>

          {activeTab === "course" && <SubjectsList />}
          {activeTab === "activities" && <Activities />}
          {activeTab === "statistics" && <Statistics />}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBtn: (isActive) => ({
    paddingHorizontal: 15,
    paddingBottom: 16,
    flex: 1,
    borderBottomWidth: isActive ? 3 : 0,
    borderBottomColor: "#ff6600",
  }),
  contentTitle: {
    color: "#aaa",
    fontFamily: "Lato_Medium",
    fontSize: 16,
    textAlign: "center",
  },
});
export default Home;
