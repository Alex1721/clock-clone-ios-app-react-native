import { View, Text, Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import ringtones from "@/assets/data/ringtones.json";

interface ToneProps {
  tone: string;
  index: number;
  selected: boolean;
  onPress: (tone: string) => void;
}

const Tone = ({ tone, index, selected, onPress }: ToneProps) => {
  const backgroundColor = "#2C2C2E";
  const backgroundColorPressed = "#220D0B";

  return (
    <Pressable
      onPress={onPress.bind(null, tone)}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? backgroundColorPressed : backgroundColor,
          borderTopRightRadius: index === 0 ? 10 : 0,
          borderTopLeftRadius: index === 0 ? 10 : 0,
          borderBottomEndRadius: index === ringtones.length - 1 ? 10 : 0,
          borderBottomStartRadius: index === ringtones.length - 1 ? 10 : 0,
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
      <Text style={styles.text}>{tone}</Text>
    </Pressable>
  );
};

export default Tone;

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
    paddingVertical: 15,
    color: "white",
    height: "100%",
    fontSize: 18,
  },
});
