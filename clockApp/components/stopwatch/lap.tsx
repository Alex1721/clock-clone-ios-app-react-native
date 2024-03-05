import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface LapProps {
  lap: number;
  lapTime: number;
  type: string;
}

const Lap = ({ lap, lapTime, type }: LapProps) => {
  const hours = Math.floor(lapTime / 3600000);
  const minutes = Math.floor((lapTime - hours * 3600000) / 60000);
  const seconds = Math.floor(
    (lapTime - hours * 3600000 - minutes * 60000) / 1000
  );

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  let color = "";

  if (type === "fastest") {
    color = "green";
  } else if (type === "slowest") {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: color, fontSize: 20 }}>Lap {lap}</Text>
      <Text style={{ color: color, fontSize: 20 }}>{formattedTime}</Text>
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C1E",
    paddingVertical: 15,
  },
});
