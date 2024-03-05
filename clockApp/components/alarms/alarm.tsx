import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface AlarmProps {
  time: string;
  description: string;
}

const Alarm = ({ time, description }: AlarmProps) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 3 }}>
        <Text style={{ color: "white", fontSize: 50 }}>
          {time}
          <Text style={{ fontSize: 24 }}>AM</Text>
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>{description}</Text>
      </View>
      <Text style={{ color: "white" }}>Slider</Text>
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C1E",
  },
});
