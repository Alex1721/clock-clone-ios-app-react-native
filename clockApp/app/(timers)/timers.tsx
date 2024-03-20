import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

const Ringtone = () => {
  return (
    <Link href="/add-timer" asChild>
      <Pressable style={styles.button}>
        <Text style={{ fontSize: 18, color: "white", flex: 1 }}>Ringtone</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "white", opacity: 0.5 }}>
            Stop the lecture
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </View>
      </Pressable>
    </Link>
  );
};

const Timers = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 10,
  },
});
