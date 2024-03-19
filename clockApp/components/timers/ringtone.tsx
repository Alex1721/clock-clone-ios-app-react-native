import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

interface RingtoneProps {
  name: string;
}

const Ringtone = ({ name }: RingtoneProps) => {
  const backgroundColor = "grey";
  const backgroundColorPressed = "#220D0B";
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? backgroundColorPressed : backgroundColor,
        },
      ]}
    >
      <Ionicons name="musical-notes" size={24} color="orange" />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default Ringtone;

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    color: "orange",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    flex: 1,
    paddingVertical: 10,
    color: "white",
    height: "100%",
    fontSize: 18,
  },
});
