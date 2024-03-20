import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";

import Ringtone from "@/components/timers/ringtone";
import Button from "@/components/button";

const Timers = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}></View>
        <Ringtone />
      </View>
    </SafeAreaView>
  );
};

export default Timers;

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
