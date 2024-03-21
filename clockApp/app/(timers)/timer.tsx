import { View, StyleSheet, SafeAreaView } from "react-native";
import { Audio } from "expo-av";
import React from "react";

import Ringtone from "@/components/timers/ringtone";
import Button from "@/components/button";

const Timer = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}></View>
        <Ringtone />
      </View>
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    gap: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
