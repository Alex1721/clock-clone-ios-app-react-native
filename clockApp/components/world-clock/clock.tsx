import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface AlarmProps {
  timezone: string;
  city: string;
  time: string;
}

const Alarm = ({ timezone, city, time }: AlarmProps) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 5 }}>
        <Text style={styles.date}>{timezone}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View>
        <Text style={styles.time}>
          <Text style={{ fontSize: 50 }}>{time}</Text>
          AM
        </Text>
      </View>
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C1E",
  },
  date: {
    color: "white",
    fontSize: 16,
    opacity: 0.5,
  },
  city: {
    color: "white",
    fontSize: 24,
  },
  time: {
    color: "white",
    fontSize: 24,
  },
});
