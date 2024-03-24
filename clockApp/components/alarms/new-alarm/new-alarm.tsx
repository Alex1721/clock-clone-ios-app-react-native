import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface NewAlarmProps {}

const NewAlarm = () => {
  return (
    <View style={styles.container}>
      <Link href={"/(alarms)/recurrence"} asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Recurrence</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ color: "red", fontSize: 16 }}>Never</Text>
            <Ionicons name="chevron-forward" size={18} color="red" />
          </View>
        </Pressable>
      </Link>

      <Pressable style={styles.button}>
        <Text style={{ color: "white", fontSize: 18 }}>Description</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Text style={{ color: "red", fontSize: 16 }}>Never</Text>
          <Ionicons name="chevron-forward" size={18} color="red" />
        </View>
      </Pressable>

      <Link href={"/(alarms)/ringtone"} asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Ringtone</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ color: "red", fontSize: 16 }}>Radar</Text>
            <Ionicons name="chevron-forward" size={18} color="red" />
          </View>
        </Pressable>
      </Link>

      <Pressable style={[styles.button, { borderBottomWidth: 0 }]}>
        <Text style={{ color: "white", fontSize: 18 }}>Alarm reminder</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Text style={{ color: "red", fontSize: 16 }}>Radar</Text>
          <Ionicons name="chevron-forward" size={18} color="red" />
        </View>
      </Pressable>
    </View>
  );
};

export default NewAlarm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    paddingVertical: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});
