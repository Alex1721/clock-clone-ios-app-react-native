import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Colors from "@/constants/Colors";

const Timers = () => {
  return (
    <View style={styles.container}>
      <Text>Timers</Text>
    </View>
  );
};

export default Timers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
});
