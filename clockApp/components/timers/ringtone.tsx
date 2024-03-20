import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

const Ringtone = () => {
  const params = useLocalSearchParams();
  const name = params.name;
  return (
    <Link
      href={{
        pathname: "/add-timer",
        params: { name: name ? name : "Radar (per default)" },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Text style={{ fontSize: 18, color: "white", flex: 1 }}>Ringtone</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "white", opacity: 0.5 }}>
            {name ? name : "Radar (per default)"}
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </View>
      </Pressable>
    </Link>
  );
};

export default Ringtone;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 10,
  },
});
