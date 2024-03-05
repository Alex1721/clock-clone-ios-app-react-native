import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Clock from "@/components/world-clock/clock";

const emptyData = require("@/assets/data/empty.json");

const WorldClock = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
