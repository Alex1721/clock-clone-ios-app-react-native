import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Lap from "@/components/stopwatch/lap";
import Button from "@/components/stopwatch/button";

const StopWatch = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Lap lap={1} lapTime={10000} type="" />
      </View>
    </SafeAreaView>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
