import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AddTimer = () => {
  return (
    <View style={styles.container}>
      <Text>AddTimer</Text>
    </View>
  );
};

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
  },
});
