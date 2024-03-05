import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

import Header from "@/components/world-clock/modal/header";

const AddTimer = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 15,
    gap: 20,
  },
});
