import { View, Text } from "react-native";
import React from "react";

interface TimerProps {
  time: number;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <View>
      <Text>Timer</Text>
    </View>
  );
};

export default Timer;
