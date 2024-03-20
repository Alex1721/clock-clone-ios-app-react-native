import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

interface StopLectureProps {
  name: string;
}

const StopLecture = ({ name }: StopLectureProps) => {
  const backgroundColor = "grey";
  const backgroundColorPressed = "#220D0B";
  const [selected, setSelected] = React.useState(false);

  const onPress = () => {
    setSelected(!selected);
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? backgroundColorPressed : backgroundColor,
        },
      ]}
    >
      {selected ? (
        <View style={{ width: 20 }}>
          <Ionicons name="checkmark" size={24} color="orange" />
        </View>
      ) : (
        <View style={{ width: 20 }} />
      )}
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default StopLecture;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "white",
    paddingVertical: 15,
  },
});
