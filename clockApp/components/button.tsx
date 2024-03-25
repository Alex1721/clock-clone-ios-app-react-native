import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";

interface ButtonProps {
  name: string;
  nameColor: string;
  backgroundColor: string;
  backgroundColorPressed: string;
  onPress: () => void;
}

const Button = ({
  name,
  nameColor,
  backgroundColor,
  backgroundColorPressed,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? backgroundColorPressed : backgroundColor },
      ]}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          position: "absolute",
          top: 2,
          left: 2,
          right: 2,
          bottom: 2,
          borderRadius: 100,
        }}
      />
      <Text style={{ color: nameColor, fontSize: 20 }}>{name}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
