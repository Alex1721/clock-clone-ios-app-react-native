import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface ButtonProps {
  type: string;
  onPress: () => void;
}

const Button = ({ type, onPress }: ButtonProps) => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  let backgroundColor = "";
  let backgroundColorPressed = "";
  let textColor = "";

  if (type === "start") {
    backgroundColor = "#0B2A12";
    backgroundColorPressed = "#0A1D0F";
    textColor = "green";
  } else if (type === "stop") {
    backgroundColor = "#340F0C";
    backgroundColorPressed = "#220D0B";
    textColor = "red";
  } else if (type === "reset") {
    backgroundColor = "#333333";
    backgroundColorPressed = "#222222";
    textColor = "white";
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? backgroundColorPressed : backgroundColor },
      ]}
    >
      <Text style={[styles.title, { color: textColor }]}>
        {capitalizedType}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
