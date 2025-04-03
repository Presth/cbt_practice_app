import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { AnimatedCircularProgress, CircularProgress } from "react-native-circular-progress";

function Index() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <StatusBar hidden />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Image
          source={require("@/assets/images/grad-cap.png")}
          style={{ width: 180, height: 180 }}
        />
      </View>

      <View style={{ flex: 1, width: '100%', alignItems: 'center', position: 'relative' }}>
        <View>
          <Text style={{ fontFamily: 'Lato_Bold', fontSize: 20, color: '#777' }}>Mathematics</Text>
        </View>
        <View style={{ margin: '10%', borderWidth: 6, borderColor: '#faa723', width: 140, height: 140, borderRadius: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Lato_Bold', fontSize: 28, color: '#777' }}>20:00</Text>
          <Text style={{ fontFamily: 'Lato_Medium', fontSize: 14, color: '#777' }}>Time Allowed</Text>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 20, position: 'absolute', bottom: '20%' }}>
          <Pressable onPress={() => router.push('take-test/run-test')} style={{ padding: 15, backgroundColor: '#faa723', borderRadius: 15, }}>
            <Text style={{
              fontFamily: 'Lato_Medium',
              fontSize: 16,
              color: '#fff',
              textAlign: 'center'
            }}>Start Exam</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
}

export default Index;
